const mongoose = require('mongoose');

// const url = 'mongodb+srv://avmansoor2023:acG1J2tg6mnq09Lu@cluster1.ddtriws.mongodb.net/E-Commerce?retryWrites=true&w=majority';

// module.exports = async function connectDB(){
//     try{
//       await  mongoose.connect(url,{
//             useNewUrlParser:true,
//             useUnifiedTopology:true
//         })
//         console.log("Database connected");
//     }catch(err){
//         console.error(err);
//     }
  

// }
mongoose.connect("mongodb+srv://avmansoor2023:acG1J2tg6mnq09Lu@cluster1.ddtriws.mongodb.net/E-Commerce?retryWrites=true&w=majority")

module.exports = {connectDB}