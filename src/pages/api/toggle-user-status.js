import connection from '../../lib/db';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { username, status } = req.body;

        if (!username || typeof status !== 'boolean') {
            return res.status(400).json({ message: 'Invalid input' });
        }

        try {
            const [result] = await connection.query(
                'UPDATE users SET active = ? WHERE name = ?',
                [status, username]
            );

            if (result.affectedRows === 0) {
                return res.status(404).json({ message: 'User not found' });
            }

            return res.status(200).json({ message: 'User status updated successfully' });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error updating user status' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
