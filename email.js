let nodemailer = require ('nodemailer');

let transporter = nodemailer.createTransport({ 
service: 'gmail', 
auth: { 
   user: 'aleixodaniel76@ufrrj.br', 
   pass: 'Rock$mith762' 
 } 
});

const mailOptions = {
  from: 'aleixodaniel76@ufrrj.br', // sender address
  to: 'aleixo76615@gmail.com', // receiver (use array of string for a list)
  subject: 'teste', // Subject line
  html: '<p>teste</p>'// plain text body
};

transporter.sendMail(mailOptions, (err, info) => {
   if(err)
     console.log(err)
   else
     console.log(info);
});