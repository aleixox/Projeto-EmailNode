const nodemailer = require ('nodemailer');
const SMTP_CONFIG = require('./config/smtp');

const transporter = nodemailer.createTransport({ 
host: SMTP_CONFIG.host, 
port: SMTP_CONFIG.port,
secure: false,
auth: {
    user: SMTP_CONFIG.user, 
    pass: SMTP_CONFIG.pass
  },
  tls: {  
    rejectUnauthorized: false 
  }
});

async function run() {
  const mailSent = await transporter.sendMail({
    text: 'Hello World',
    subject: 'Hello ✔',
    from: 'Daniel Aleixo <aleixoteste8@gmail.com>',
    to: ["aleixodaniel76@ufrrj.br", "aleixo76615@gmail.com"]
    });
    console.log(mailSent);
}


run().catch(console.error);

// const mailOptions = {
//   from: email, // sender address
//   to: 'aleixo76615@gmail.com', // receiver (use array of string for a list)
//   subject: 'teste', // Subject line
//   html: '<p>teste</p>'// plain text body
// };

// transporter.sendMail(mailOptions, (err, info) => {
//   if(err)
//     console.log(err)
//   else
//     console.log(info);
// });