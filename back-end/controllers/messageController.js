const message = require('../webDriver/webDriver');


const sendMessage = async(req,res) => {
    const { message } = req.body;
    const result = await message(message);
    res.json(result);


}


module.exports = {
    sendMessage
}