console.log('Inicio...');

const express = require ("express")
const path = require("path")
const nodemailer = require('nodemailer')

const app = express()
const router = express.Router()

router.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname + "/pages/home.html"))
})

router.get("/contato", (req, res)=>{
    res.sendFile(path.join(__dirname + "/pages/contato.html"))
})

app.use(router)

app.listen(process.env.PORT || 3333, ()=>{
    console.log("SERVIDOR ONLINE");
})


////////////////////////////


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
