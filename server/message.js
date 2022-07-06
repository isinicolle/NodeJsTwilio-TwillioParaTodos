require('dotenv').config();

const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken); 
 

/*
//whatsapp
const sendMessage = async (req, res) => {
    try {
        
        const { number, message } = req.body;

        const response = await client.messages.create({
           messagingServiceSid: process.env.MESSAGING_SERVICE_SID,
           body: `Hola! ${message} gracias por comunicarte conmigo :D. Este es el proyecto personal de Isis, usando twillio!!! 🤩`, 
           from: process.env.TWILLIO_NUMBER,     
           to: `whatsapp:${number.replace(/ /g, "")}`
        });

        console.log(response);

        res.json({
            msg: 'Mensaje enviado correctamente'
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error al enviar mensaje'
        });
    }
}
*/


//sms
const sendMessage = async (req, res) => {
    try {
        
        const { number, message } = req.body;

        const response = await client.messages.create({
           messagingServiceSid: process.env.MESSAGING_SERVICE_SID,
           body: `Hola! ${message} gracias por comunicarte conmigo :D. Este es el proyecto personal de Isis, usando twillio!!! 🤩`,  
           to: `${number.replace(/ /g, "")}`
        });

        console.log(response);

        res.json({
            msg: 'Mensaje enviado correctamente'
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error al enviar mensaje'
        });
    }
}




module.exports = sendMessage;