const accountSid = 'ACa9ad7f101de7a5aaaa9756def6a74497'; 
const authToken = 'ba8084426ee1dc6ce1c03f2db82cfcd7';  
const client = require('twilio')(accountSid, authToken); 
 

const sendMessage = async (req, res) => {
    try {
        
        const { number, message } = req.body;

        const response = await client.messages.create({
           body: `Hola! ${message} gracias por comunicarte conmigo :D. Este es el proyecto de Isis, usando twillio!!! 🤩`, 
           from: 'whatsapp:+14155238886',     
           to: `whatsapp:${number}`
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