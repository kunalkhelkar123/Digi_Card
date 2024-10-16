import connection from '../../lib/db';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { userId, active } = req.body;

        try {
            await connection.query('UPDATE users SET active = ? WHERE id = ?', [active, userId]);
            res.status(200).json({ message: 'User status updated successfully' });
        } catch (error) {
            console.error('Error updating user status:', error);
            res.status(500).json({ error: 'Failed to update user status' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
