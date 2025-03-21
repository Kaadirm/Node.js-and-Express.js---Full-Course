const nodemailer = require('nodemailer');

const sendEmail = async (req, res) => {
    let testAccount = await nodemailer.createTestAccount();
    
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'cathy.bashirian92@ethereal.email',
            pass: '7HVVZJDe7ThYdxpvzu'
        }
    });

    let info = await transporter.sendMail({
        from: '"Kadir" <test@test.com>',
        to: 'test@test.com',
        subject: 'Hello',
        html: '<h2>Sending Emails with Node.js</h2>'
    });
    
}   

module.exports = sendEmail;