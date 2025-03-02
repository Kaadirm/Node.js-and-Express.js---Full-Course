const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail')


const sendEmailEthereal = async (req, res) => {
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

const sendEmailSendGrid = async (req, res) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
        to: 'aptul_kadir1995@hotmail.com',
        from: 'abdlkdrmmsglu@gmail.com',
        subject: 'Hello',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<h2>Sending Emails with Node.js</h2>'
    }
    const info = await sgMail.send(msg)
    res.json(info)
}

module.exports = {
    sendEmailEthereal,
    sendEmailSendGrid
}