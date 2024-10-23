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
            userName,
            mobile,
            whatsapp,
            facebook,
            instagram,
            twitter,
            designation,
            companyName,
            companyLocation,
            website,
            linkedin,
        } = req.body;

        // console.log("userName ==> " , userName)
        const profilePicture = req.files['profilePicture'][0].filename;
        const backgroundPhoto = req.files['backgroundPhoto'][0].filename;

        // Create the profile URL
        const profileUrl = `${process.env.BASE_URL}/${name}`;

        // Generate QR Code path and final image path
        const qrCodePath = `${Date.now()}-qr.png`;
        const qrCodeFullPath = path.join(process.cwd(), 'public', qrCodePath);
        const profilePicturePath = path.join(process.cwd(), '/uploads', profilePicture);

        try {
            // Generate the QR code with enhanced clarity
            const qrCodeBuffer = await QRCode.toBuffer(profileUrl, {
                errorCorrectionLevel: 'H', // High error correction
                width: 900, // Increase size for better clarity
            });

            // Create canvas for combining QR code, name
            const canvas = createCanvas(350, 350); // Adjust the canvas size as needed
            const ctx = canvas.getContext('2d');

            // Set the background color (optional)
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Add user name
            ctx.font = 'bold 24px Arial';
            ctx.fillStyle = 'black';
            ctx.textAlign = 'center';
            ctx.fillText(name, canvas.width / 2, 80); // Text position (centered)

            // Draw the QR code on the canvas below the name
            const qrImg = await loadImage(qrCodeBuffer);
            ctx.drawImage(qrImg, 10, 80, 330, 285); // Draw QR code (x, y, width, height)

            // Save the final image (QR code + name)
            const finalImagePath = path.join(process.cwd(), 'public', qrCodePath);
            const out = fs.createWriteStream(finalImagePath);
            const stream = canvas.createPNGStream();
            stream.pipe(out);
            out.on('finish', async () => {
                // Insert user data into the database, including the generated QR code path
                await connection.query(
                    `INSERT INTO users (
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
                        companyLocation,
                        website, 
                        linkedin, 
                        profilePicture, 
                        qrCode,
                        backgroundPhoto
                    ) VALUES (?, ?, ?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?)`,
                    [
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
                        companyLocation,
                        website,
                        linkedin,
                        profilePicture,
                        qrCodePath,
                        backgroundPhoto,
                    ]
                );

                res.status(200).json({ message: 'Profile saved and QR code generated!', success: true, });
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error generating QR code or saving profile' });
        }
    });
}
