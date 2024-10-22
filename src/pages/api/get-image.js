import path from 'path';
import fs from 'fs';

export default async function handler(req, res) {
  const { fileName } = req.query; // The image name passed in the URL
  const filePath = path.join(process.cwd(), 'public/uploads', fileName); // Your custom upload folder path

  // Check if file exists
  if (fs.existsSync(filePath)) {
    res.setHeader('Content-Type', 'image/png'); // Adjust Content-Type based on your files
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
  } else {
    res.status(404).send('File not found');
  }
}
