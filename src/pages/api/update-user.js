import connection from '../../lib/db';
import multer from '../../../multer-config';
import QRCode from 'qrcode';
import fs from 'fs';
import path from 'path';
import { createCanvas, loadImage } from 'canvas';

export const config = {
    api: {
        bodyParser: false,
    },
};

export default function handler(req, res) {
    multer.fields([
        { name: 'profilePicture', maxCount: 1 },
        { name: 'backgroundPhoto', maxCount: 1 },
    ])(req, {}, async (err) => {
        if (err) {
            return res.status(500).send(err);
        }

        const {
            id, // Ensure this is included
            name,
            userName,
            address,
            email,
            mobile,
            whatsapp,
            facebook,
            instagram,
            twitter,
            designation,
            companyName,
            website,
            linkedin,
        } = req.body;

        // Initialize variables to avoid null reference
        let profilePicture = null;
        let backgroundPhoto = null;

        // Check if files exist before accessing them
        if (req.files['profilePicture'] && req.files['profilePicture'][0]) {
            profilePicture = req.files['profilePicture'][0].filename;
        } else {
            console.warn("No profile picture uploaded.");
        }

        if (req.files['backgroundPhoto'] && req.files['backgroundPhoto'][0]) {
            backgroundPhoto = req.files['backgroundPhoto'][0].filename;
        } else {
            console.warn("No background photo uploaded.");
        }

        // Create the profile URL
        const profileUrl = `${process.env.BASE_URL}/${name}`;

        // Generate QR Code path and final image path
        const qrCodePath = `uploads/${Date.now()}-${name}-qr.png`;
        const qrCodeFullPath = path.join(process.cwd(), 'public', qrCodePath);

        // Check if ID is provided
        if (!id) {
            console.error("User ID is required");
            return res.status(400).json({ message: 'User ID is required.' });
        }

        // Prepare the update fields dynamically
        const updates = [];
        const values = [];

        // Add fields to update if they are provided
        if (name) {
            updates.push('name = ?');
            values.push(name);
        }
        if (userName) {
            updates.push('userName = ?');
            values.push(userName);
        }
        if (address) {
            updates.push('address = ?');
            values.push(address);
        }
        if (email) {
            updates.push('email = ?');
            values.push(email);
        }
        if (mobile) {
            updates.push('mobile = ?');
            values.push(mobile);
        }
        if (whatsapp) {
            updates.push('whatsapp = ?');
            values.push(whatsapp);
        }
        if (facebook) {
            updates.push('facebook = ?');
            values.push(facebook);
        }
        if (instagram) {
            updates.push('instagram = ?');
            values.push(instagram);
        }
        if (twitter) {
            updates.push('twitter = ?');
            values.push(twitter);
        }
        if (designation) {
            updates.push('designation = ?');
            values.push(designation);
        }
        if (companyName) {
            updates.push('companyName = ?');
            values.push(companyName);
        }
        if (website) {
            updates.push('website = ?');
            values.push(website);
        }
        if (profilePicture) {
            updates.push('profilePicture = ?');
            values.push(profilePicture);
        }
        if (backgroundPhoto) { // Check for background photo existence
            updates.push('backgroundPhoto = ?');
            values.push(backgroundPhoto);
        }
        if (linkedin) {
            updates.push('linkedin = ?');
            values.push(linkedin);
        }

        // Check if there are no fields to update
        if (updates.length === 0) {
            console.warn("No fields to update.");
            return res.status(400).json({ message: 'No fields to update.' });
        }

        // Add the user ID to the end of the values array
        values.push(id);

        try {
            // Generate the QR code
            const qrCodeBuffer = await QRCode.toBuffer(profileUrl);

            // Create canvas for combining QR code, profile photo, and name
            const canvas = createCanvas(400, 600); // Adjust the canvas size as needed
            const ctx = canvas.getContext('2d');

            // Load the profile picture and draw on the canvas if it exists
            if (profilePicture) {
                const profileImgPath = path.join(process.cwd(), 'public/uploads', profilePicture);
                const profileImg = await loadImage(profileImgPath);
                ctx.drawImage(profileImg, 100, 20, 200, 200); // Draw profile picture (x, y, width, height)
            }

            // Add user name below profile picture
            ctx.font = 'bold 24px Arial';
            ctx.fillStyle = 'black';
            ctx.textAlign = 'center';
            ctx.fillText(name, 200, 250); // Text position (centered)

            // Draw the QR code on the canvas below the name
            const qrImg = await loadImage(qrCodeBuffer);
            ctx.drawImage(qrImg, 100, 280, 200, 200); // Draw QR code (x, y, width, height)

            // Save the final image (QR code + profile picture + name)
            const finalImagePath = path.join(process.cwd(), 'public', qrCodePath);
            const out = fs.createWriteStream(finalImagePath);
            const stream = canvas.createPNGStream();
            stream.pipe(out);

            out.on('finish', async () => {
                // Insert user data into the database, including the generated QR code path
                await connection.query(
                    `UPDATE users SET ${updates.join(', ')} WHERE id = ?`,
                    values
                );
                res.status(200).json({ message: 'Profile saved and QR code generated!' });
            });
        } catch (error) {
            console.error("Error generating QR code or saving profile:", error);
            res.status(500).json({ error: 'Error generating QR code or saving profile' });
        }
    });
}
