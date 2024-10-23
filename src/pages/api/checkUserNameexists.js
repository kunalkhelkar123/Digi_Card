import connection from '../../lib/db'; // Ensure your DB connection is properly configured


const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { userName } = req.body;
    console.log("inside check userName exist ", userName)

    let data=0;
    try {
      if(data>0){
          if (data.length > 0) { // Check if user array has any results
        console.log("check userName exist truee")

              res.status(200).json({ exists: true })
            } else {
        console.log("check userName exist false")

              res.status(200).json({ exists: false })

            }
  
      }
      const sqlQuery = `
        SELECT * FROM users WHERE userName = ?;
      `;
      // console.log("check sqlQuery ", sqlQuery);
      // Execute the query
      const [user] = await connection.query(sqlQuery, [userName]);
      data=user;
      // console.log("check user ", user);
  
      if (user.length > 0) { // Check if user array has any results
        console.log("check userName exist truee")
        res.status(200).json({ exists: true })
      } else {
        console.log("check userName exist false")
        res.status(200).json({ exists: false })
      }
    } catch (error) {
      console.log("error  ", error);
      res.status(500).json({  message: "Internal Server Error"})

    }
  } else {
    res.status(400).json({msg: 'ONLY POST req is allowed'})
  }
}

export default handler