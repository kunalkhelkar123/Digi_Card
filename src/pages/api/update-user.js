import connection from '../../lib/db'; // Ensure your DB connection is properly configured

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { id, name, address, mobile, email, companyName, website } = req.body;

        // Ensure that the ID is present
        if (!id) {
            console.log("User ID is required");
            return res.status(400).json({ message: 'User ID is required.' });
        }

        // Prepare the update fields dynamically
        const updates = [];
        const values = [];

        // Add fields to update if they are provided
        if (name) {
            updates.push('name = ?');
            values.push(name);
        }
        if (address) {
            updates.push('address = ?');
            values.push(address);
        }
        if (mobile) {
            updates.push('mobile = ?');
            values.push(mobile);
        }
        if (email) {
            updates.push('email = ?');
            values.push(email);
        }
        if (companyName) {
            updates.push('companyName = ?');
            values.push(companyName);
        }
        if (website) {
            updates.push('website = ?');
            values.push(website);
        }

        // Check if there are no fields to update
        if (updates.length === 0) {
            return res.status(400).json({ message: 'No fields to update.' });
        }

        // Add the user ID to the end of the values array
        values.push(id);

        try {
            // Update the user in your database
            const [result] = await connection.query(
                `UPDATE users SET ${updates.join(', ')} WHERE id = ?`,
                values
            );

            if (result.affectedRows === 0) {
                return res.status(404).json({ message: 'User not found.' });
            }

            return res.status(200).json({ message: 'User updated successfully', id });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error updating user.', error: error.message });
        }
    }

    return res.status(405).end(); // Method Not Allowed
}
