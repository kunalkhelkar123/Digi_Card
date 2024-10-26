import connection from '../../lib/db';

export default async function handler(req, res) {
    // console.log('API Route called!');
    try {

        // const current_Date = new Date();
        // const formattedDateTime = current_Date.toLocaleDateString();
        // console.log("formattedDateTime", formattedDateTime);



        // const dateTime = "2020-12-10 13:04:29";

        // // Split the string by space to separate date and time
        // const [date, time] = dateTime.split(" ");

        // console.log("Date:", date); // Outputs: "2020-12-10"
        // console.log("Time:", time); // Outputs: "13:04:29"



        const [rows] = await connection.query('SELECT * FROM users');
        console.log('Fetched users:', rows); // Log fetched users
        res.status(200).json({ users: rows });
    } catch (error) {
        console.error('Error fetching user profiles:', error); // More detailed error logging
        res.status(500).json({ error: 'Failed to fetch user profiles' });
    }
}
