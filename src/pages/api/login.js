import jwt from 'jsonwebtoken'; // Import JWT library
import connection from '../../lib/db'; // Ensure your DB connection is properly configured

const JWT_SECRET = process.env.JWT_SECRET || '2$&hg*ok#ty%imindlazss$of#tw&ar#e@2@0#2$4'; // Use environment variables for production

export default async function handler(req, res) {
    console.log("Request received");

    if (req.method === 'POST') {
        try {
            // Parse the request body as JSON
            const { username, userpassword } = req.body;
            // console.log("Username and password received: ", username, userpassword);

            // Basic validation for credentials
            if (username === 'admin@gmail.com' && userpassword === 'Mindlabzsoftware@2024') {
                // console.log("Credentials matched");

                // Create a JWT token (expires in 1 hour)
                const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' });

                // Send the JWT token as part of the response
                res.status(200).json({ success: true, token:token });
            } else {
                console.log("Invalid credentials");
                res.status(200).json({ success: false });
            }
        } catch (error) {
            console.log("Server error: ", error);
            res.status(500).json({ error: 'Failed to process request' });
        }
    } else {
        console.log("Invalid request method");
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
