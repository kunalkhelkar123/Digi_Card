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
        if (err) return res.status(500).send(err);
        
        const {
            name,
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

        const profilePicture = req.files['profilePicture'][0].filename;
        const backgroundPhoto = req.files['backgroundPhoto'][0].filename;

        // Create the profile URL
        const profileUrl = `${process.env.BASE_URL}/${name}`;

        // Generate QR Code path and final image path
        const qrCodePath = `uploads/${Date.now()}-${name}-qr.png`;
        const qrCodeFullPath = path.join(process.cwd(), 'public', qrCodePath);
        const profilePicturePath = path.join(process.cwd(), 'public/uploads', profilePicture);

        try {
            // Generate the QR code (raw version, without user info)
            const qrCodeBuffer = await QRCode.toBuffer(profileUrl);

            // Create canvas for combining QR code, profile photo, and name
            const canvas = createCanvas(400, 600); // Adjust the canvas size as needed
            const ctx = canvas.getContext('2d');

            // Load the profile picture and draw on the canvas
            const profileImg = await loadImage(profilePicturePath);
            ctx.drawImage(profileImg, 100, 20, 200, 200); // Draw profile picture (x, y, width, height)

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
                    `INSERT INTO users (
                        name, 
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
                        profilePicture, 
                        qrCode,
                        backgroundPhoto
                    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                    [
                        name, 
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
                        profilePicture, 
                        qrCodePath,
                        backgroundPhoto,
                    ]
                );
                res.status(200).json({ message: 'Profile saved and QR code generated!' });
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error generating QR code or saving profile' });
        }
    });
}
