
import nodemailer from 'nodemailer'
const handler = async (req, res) => {
    console.log("inside ")
    if (req.method === 'POST') {

        try {
            const { name, email, phone, address, message, query } = req.body;
            console.log("name, email, phone,address,message,query ", name, email, phone, address, message, query)

            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'kunalkhelkar123@gmail.com',
                    pass: 'kzfp gofh ling sbgp'
                }
            })
            console.log("check 3");
            const mailOption = {
                from: email,
                to: "kunalkhelkar2000@gmail.com",
                subject: "Enquiry from Digi_Card ",
                html: `
                <h4>Name ${name}</h4>
                <h4>Email ${email}</h4>
                <h4>Phone number ${phone}</h4>
                <h4>Address ${address}</h4>
                <h4>Message ${message}</h4>
                <h4>Query ${query}</h4>
                <h4>From  ${name}</h4>                
                `
            }
            transporter.sendMail(mailOption, (err, info) => {
                if (err) {
                    console.log(err);
                }
                else if (info) {
                    // console.log(info);
                }
            })
            console.log("mail send successfully");
            res.status(200).json({ success: true, message: "Email Sent Successfully" })
        } catch (error) {
            res.status(500).json({ success: false, message: "Failed to Send Email" })
        }
    } else {
        res.status(400).json({ msg: 'ONLY POST req is allowed' })
    }
}

export default handler