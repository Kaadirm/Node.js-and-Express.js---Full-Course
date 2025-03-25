const nodemailer = require('nodemailer');
const nodemailerConfig = require('./nodemailerConfig');

const sendEmail = async (req, res) => {
    let testAccount = await nodemailer.createTestAccount();
    
    const transporter = nodemailer.createTransport(nodemailerConfig);

    let info = await transporter.sendMail({
        from: '"Kadir" <test@test.com>',
        to: 'test@test.com',
        subject: 'Hello',
        html: '<h2>Sending Emails with Node.js</h2>'
    });
    
}   

module.exports = sendEmail;