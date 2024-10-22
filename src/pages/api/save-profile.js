import connection from '../../lib/db';
import multer from '../../../multer-config'; // Ensure you have this configured correctly
import QRCode from 'qrcode';
import fs from 'fs';
import path from 'path';
import { createCanvas, loadImage } from 'canvas';



const upload = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 5, // Limit file size to 5.1MB
      fieldSize: 1024 * 1024 * 5 // Limit field size to 5MB
    }
  })

export const config = {
    api: {
        bodyParser: false, // Disable body parsing to use multer
    },
};

// Handler function for saving the profile
export default function handler(req, res) {
    // Setup multer to handle file uploads
console.log("check inside save-profile 1")

    upload.fields([
        { name: 'profilePicture', maxCount: 1 },
        { name: 'backgroundPhoto', maxCount: 1 }
    ])(req, res, async (err) => {
        if (err) {
            console.error('Multer error:', err);
            if (err.code === 'LIMIT_FILE_SIZE') {
                return res.status(400).json({ error: 'File size exceeds 5MB' });
            }
            return res.status(500).json({ error: 'File upload error' });
        }

        // Log files to confirm upload
        console.log('Uploaded files:', req.files);

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
            companyLocation,
            website,
            linkedin,
        } = req.body;

        console.log('companyLocation ==> ', companyLocation);
        console.log("check inside save-profile 2")

        // Check if files exist
        const profilePicture = req.files['profilePicture'] ? req.files['profilePicture'][0].filename : null;
        const backgroundPhoto = req.files['backgroundPhoto'] ? req.files['backgroundPhoto'][0].filename : null;
        console.log("check inside save-profile 3")

        // Ensure both files are uploaded
        if (!profilePicture || !backgroundPhoto) {
            return res.status(400).json({ error: 'Profile picture and background photo are required' });
        }

        // Sanitize name input to avoid issues with the profile URL
        const sanitizedProfileName = name.trim().replace(/\s+/g, '-').toLowerCase();

        // Create the profile URL dynamically based on sanitized name
        const profileUrl = `${process.env.BASE_URL}/${sanitizedProfileName}`;

        // Set paths for QR code and images
        const qrCodePath = `${Date.now()}-qr.png`;
        const qrCodeFullPath = path.join(process.cwd(), 'public', qrCodePath);
        const profilePicturePath = path.join(process.cwd(), '/uploads', profilePicture);
        const backgroundPhotoPath = path.join(process.cwd(), '/uploads', backgroundPhoto); // For future use if needed

        try {
            // Generate the QR code with enhanced clarity and size
            const qrCodeBuffer = await QRCode.toBuffer(profileUrl, {
                errorCorrectionLevel: 'H', // High error correction for better scanability
                width: 900 // Larger size for improved readability
            });

            // Create a canvas to add the QR code and the user's name
            const canvas = createCanvas(350, 350); // Adjusted canvas size
            const ctx = canvas.getContext('2d');

            // Set the background color (optional)
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Add user name to the canvas
            ctx.font = 'bold 24px Arial';
            ctx.fillStyle = 'black';
            ctx.textAlign = 'center';
            ctx.fillText(name, canvas.width / 2, 80); // Center text

            // Draw the QR code below the name on the canvas
            const qrImg = await loadImage(qrCodeBuffer);
            ctx.drawImage(qrImg, 10, 80, 330, 285); // Adjust QR code size and position

            // Save the final combined image (QR code + name)
            const finalImagePath = path.join(process.cwd(), 'public', qrCodePath);
            const out = fs.createWriteStream(finalImagePath);
            const stream = canvas.createPNGStream();
            stream.pipe(out);

            // When finished saving the canvas image
            out.on('finish', async () => {
                try {
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
                            companyLocation,
                            website, 
                            linkedin, 
                            profilePicture, 
                            qrCode,
                            backgroundPhoto
                        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,

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
                            companyLocation,
                            website, 
                            linkedin, 
                            profilePicture, 
                            qrCodePath,
                            backgroundPhoto,
                        ]
                    );

                    // Return success response
                    res.status(200).json({ message: 'Profile saved and QR code generated successfully!' });
                } catch (dbError) {
                    console.error('Database Insertion Error:', dbError);
                    res.status(500).json({ error: 'Error saving profile to the database' });
                }
            });
        } catch (error) {
            console.error('QR Code/Canvas Generation Error:', error);
            res.status(500).json({ error: 'Error generating QR code or saving profile' });
        }
    });
}
