// const Contact = require('../models/contact')
const User = require('../models/user')


// User Signup
const signup = async(req,res) => {
    console.log("hiiiiiiiii");
    console.log(req.body);
    const {name,email,password,number} = req.body;
    try{
        const newUser = new User({
            name,
            email,
            password,
            number
        })
        console.log(newUser);
        await newUser.save()

        return res.status(200).json('Success')
       
    }catch(error){
        return res.status(500).json(error)
    }
}

// User Login
const login = async(req,res) => {
    console.log(req.body);
    const {email,password} = req.body

    try{

    const user = await User.findOne({email})

    if(!user){
        return res.status(404).json('user not found')
    }

    if(password !== user.password){
        return res.status('Password Incorrect')

    }

    return res.status(200).json('login Successfuly')
}catch(error){

    return res.status(500).json(error,'error')
}

}


module.exports = {
    login,
    signup
};