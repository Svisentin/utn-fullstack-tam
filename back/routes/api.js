var express = require("express");
var router = express.Router();
var nodemailer = require("nodemailer"); 

router.post('/contacto', async (req, res) => {
  const mail = {
    to: 'sergito@gmail.com', 
    subject: 'Contacto web',
    html: `${req.body.nombre} se contacto a traves de la web y quiere más informacion a este correo: ${req.body.email} <br> Además, hizo el siguiente comentario: ${req.body.mensaje} <br> Su tel es:
    ${req.body.telefono}`
    }

  const mailTAM = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT, 
    auth: {
      user: process.env.SMTP_USER, 
      pass: process.env.SMTP_PASS
    }
  });

  await mailTAM.sendMail(mail)

  res.status(201).json({
    error: false,  
    message: 'Mensaje enviado'
  });

});


module.exports = router;
