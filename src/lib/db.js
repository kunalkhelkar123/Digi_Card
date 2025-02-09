// import mysql from 'mysql2/promise';

// const connection = mysql.createPool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
// });

// export default connection;

import mysql from 'mysql2/promise';

const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});
const connection2 = mysql.createPool({
    host: process.env.DB_HOST2,
    user: process.env.DB_USER2,
    password: process.env.DB_PASSWORD2,
    database: process.env.DB_NAME2,
});
// Test the connection
async function testConnection() {
    try {
        console.log("connecting live database server ")
        await connection.getConnection();
        console.log("Connected to the live  database2");
    } catch (error) {

        try {
            console.log("connecting local database server ")

            await connection.getConnection();
            console.log("Connected to the local  database");

        }
        catch (err) {

            console.error("Failed to connect to the database ==>", error);

        }

    }
}

// Call the function to test the connection
testConnection();

export default connection;
