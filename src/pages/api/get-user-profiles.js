import connection from '../../lib/db';

export default async function handler(req, res) {
    // console.log('API Route called!');
    try {
        const [rows] = await connection.query('SELECT * FROM users');
        // console.log('Fetched users:', rows); // Log fetched users
        res.status(200).json({ users: rows });
    } catch (error) {
        console.error('Error fetching user profiles:', error); // More detailed error logging
        res.status(500).json({ error: 'Failed to fetch user profiles' });
    }
}
