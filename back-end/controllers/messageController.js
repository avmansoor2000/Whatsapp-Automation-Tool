const messageSend = require('../webDriver/webDriver');


const sendMessage = async(req,res) => {
    console.log('snd msg');
    console.log(req.body);
    // const { message } = req.body;
    try{
        const message = 'Hi'

        const result = await messageSend(message);
        console.log(result);

        return res.status(200).json(result);
    }catch(error){

        return res.status(500).json(error,'error')
    }
}


module.exports = {
    sendMessage
}