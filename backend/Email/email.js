const express = require('express');
const nodemailer = require('nodemailer');
const router    = express.Router();


//email sent to the user
router.post('/send-email', (req, res) => {
    const { email, firstName, lastName, phone, message } = req.body;
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'backend4alexdunntours@gmail.com',
            pass: 'ddem zjzd erko xuyx'
        }
    });

    const mailOptions = {
        from: 'backend4alexdunntours@gmail.com',
        to: 'alexdunntours@gmail.com',
        subject: `New Message from ${firstName} ${lastName} via Alex Dunn Tours Website`,
        text: `You have received a new message from the Alex Dunn Tours website contact form.\n\nDetails:\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.status(500).send({
                success: false,
                message: 'Something went wrong. Try again later'
            });
        }
        else {
            res.send({
                success: true,
                message: 'Thanks for contacting us. We will get back to you shortly'
            });
        }
    }
    );
}

);

module.exports = router;
