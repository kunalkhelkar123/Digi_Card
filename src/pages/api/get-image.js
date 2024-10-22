import path from 'path';
import fs from 'fs';

export default async function handler(req, res) {
  const { fileName } = req.query; // The image name passed in the URL

  // Define file path based on the file type
  let filePath = '';
  if (fileName.includes("qr.png")) {
    console.log("inside qr.png");
    filePath = path.join(process.cwd(), 'public/', fileName); // Path for 'qr.png'
  } else {
    filePath = path.join(process.cwd(), 'public/uploads', fileName); // Path for other uploads
  }

  // Check if the file exists
  if (fs.existsSync(filePath)) {
    // Dynamically set Content-Type based on the file extension
    const extension = path.extname(fileName).toLowerCase();
    let contentType = 'application/octet-stream'; // Default content type

    if (extension === '.png') {
      contentType = 'image/png';
    } else if (extension === '.jpg' || extension === '.jpeg') {
      contentType = 'image/jpeg';
    } else if (extension === '.gif') {
      contentType = 'image/gif';
    }

    res.setHeader('Content-Type', contentType);

    // Stream the file to the response
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
  } else {
    res.status(404).send('File not found');
  }
}
