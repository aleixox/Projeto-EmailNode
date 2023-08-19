const nodemailer = require('nodemailer');
require('dotenv').config();


const transporter = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL ,
        pass: process.env.SENHA,
    },
});

transporter.sendMail({
from: `Daniel Aleixo <${process.env.EMAIL}>`,
    to: `${process.env.EMAIL_TO}`,
    subject: 'Teste de envio de email',
    text: 'Olá, seja bem vindo ao sistema de envio de email, quarto teste',
    html: '<h1>Olá, seja bem vindo ao sistema de envio de email, quarto teste</h1>'
}).then(message => {
    console.log(message);
}).catch(err => {
    console.log(err);
});

