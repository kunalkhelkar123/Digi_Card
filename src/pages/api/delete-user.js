import connection from '../../lib/db'; // Ensure your DB connection is properly configured

export default async function handler(req, res) {
    console.log("API call initiated");

    try {
        // Only handle POST requests
        if (req.method === 'POST') {
            console.log("Received a POST request");

            const { userId } = req.body; // Extract userId from request body
            console.log("User ID to delete:", userId);

            // Ensure userId is provided
            if (!userId) {
                return res.status(400).json({ success: false, error: 'User ID is required' });
            }

            const query = 'DELETE FROM users WHERE id = ?';

            // Using the connection.query directly in a promise style
            connection.query(query, [userId], (error, results) => {
                if (error) {
                    console.error('Error deleting user:', error); // Log the error
                    return res.status(500).json({ success: false, error: 'Failed to delete user' });
                }

                // Check if any rows were affected (user deleted)
                if (results.affectedRows > 0) {
                    console.log('User deleted successfully:', results);
                    return res.status(200).json({ success: true });
                } else {
                    // If no rows were affected, user may not exist
                    console.warn('No user found with that ID');
                    return res.status(404).json({ success: false, error: 'User not found' });
                }
            });
        } else {
            // Handle any other HTTP methods
            console.warn('Method not allowed:', req.method);
            return res.status(405).json({ success: false, error: 'Method not allowed' });
        }
    } catch (error) {
        console.error("Unexpected error occurred:", error); // Log unexpected errors
        return res.status(500).json({ success: false, error: 'Internal server error' });
    }
}
