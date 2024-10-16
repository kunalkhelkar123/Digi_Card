import connection from '../../lib/db'; // Ensure your DB connection is properly configured

export default async function handler(req, res) {
    try {
        const [rows] = await connection.query('SELECT id, name, address, mobile, email, active FROM users');
        res.status(200).json({ users: rows });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch user profiles' });
    }
}
