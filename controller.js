const nodemailer = require('nodemailer');
const env = process.env

const sendMail = (mailData, connData) => new Promise((resolve, reject) => {
    if(!connData) {
        connData = getConnData();
    }

    if(!mailData.to || !mailData.subject || !mailData.body) {
        reject({
            internal: false,
            message: 'missing data to send email. expected {to:"...",subject:"...",body:"..."}'
        });
        return;
    }

    const transporter = nodemailer.createTransport({
        host: connData.host,
        port: connData.port,
        secure: connData.secure,
        auth: {
            user: connData.user,
            pass: connData.pass
        }
    });

    var mailOptions = {
        from: connData.user,
        to: mailData.to,
        subject: mailData.subject,
        text: mailData.body
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            reject({
                internal: true,
                message: error
            });
        } else {
            resolve();
        }
    });
})

const getConnData = () => ({
    host: env.SMTP_HOST,
    port: env.SMTP_PORT,
    secure: env.SMTP_SECURE,
    user: env.SMTP_USER,
    pass: env.SMTP_PASS
})


module.exports = sendMail