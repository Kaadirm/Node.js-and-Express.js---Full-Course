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

const sendEmailGmail = async (req, res) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL_USER, // your gmail
            pass: process.env.EMAIL_PASS  // your app password
        }
    });
    
    let info = await transporter.sendMail({
        from: process.env.EMAIL_USER, // sender address (your Gmail)
        to: 'aptul_kadir1995@hotmail.com',   // list of receivers
        subject: 'Hello from Gmail',   // Subject line
        text: 'Hello world?',          // plain text body
        html: '<h2>Sending Emails with Gmail via Node.js</h2>' // html body
    });

    res.json({
        message: 'Email sent successfully!',
        messageId: info.messageId,
    });
};

module.exports = {
    sendEmailEthereal,
    sendEmailSendGrid,
    sendEmailGmail
}