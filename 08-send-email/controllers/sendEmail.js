const nodemailer = require('nodemailer');

const sendEmail = async (req, res) => {
    let testAccount = await nodemailer.createTestAccount();
    
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });
    
    let info = await transporter.sendMail({
        from: '"Kadir" <test@test.com>',
        to: 'test@test.com',
        subject: 'Hello',
        html: '<h2>Sending Emails with Node.js</h2>'
    });

    res.json(info);
}

module.exports = sendEmail