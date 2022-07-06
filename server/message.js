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
           body: `¡Hola! ${message} Gracias por probar mi mini-proyecto de aprendizaje usando Twilio🤩 desde WSP`, 
           from: process.env.TWILLIO_NUMBER_WHATSAPP,     
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
           body: `¡Hola! ${message} Gracias por probar mi mini-proyecto de aprendizaje usando Twilio🤩 desde SMS`,  
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