const nodemailer = require("nodemailer")
require('dotenv').config()

const transportador = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'sheridan71@ethereal.email',
        pass: 'QxyxM3ND79XqeA1Urq'
    }
});

const emailASerEnviado = {
    from: 'sheridan71@ethereal.email',
    to: 'purplefire0008@proton.me',
    subject: 'off',
    text: 'foi?'
}

transportador.sendMail(emailASerEnviado, (err) => {
    if (err){
        console.log(err);
        return
    }
    console.log('Email enviado!');

})

console.log('...');
