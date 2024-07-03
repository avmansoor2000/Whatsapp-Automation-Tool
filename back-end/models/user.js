const {Schema,model} = require('mongoose');

const userSchema = new Schema ({
    name: String,
    email: String,
    password: String,
    phone_no : Number
})

// module.exports = model('User',userSchema)
const User = model('User',userSchema)

module.exports = User