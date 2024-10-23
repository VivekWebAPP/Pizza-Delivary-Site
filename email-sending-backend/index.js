import express from 'express';
import { createTransport } from 'nodemailer';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

const transporter = createTransport({
    service: 'gmail',
    auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.PASSWORD,
    },
});

app.post('/send-email', async (req, res) => {

    const { to, subject, text } = req.body;

    const mailOptions = {
        from: process.env.USER_EMAIL,
        to: to,
        subject: subject,
        text: text
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send({ message: 'Error sending email', error });
        }
        res.status(200).send({ message: 'Email sent successfully', info });
    });
});

app.listen(process.env.PORT, () => {
    console.log('Server is running on port', process.env.PORT);
});
