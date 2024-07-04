import instance from './instence'

export const User = async(payload)=>{
    try {
        console.log(payload,'login data');
        const response = await instance.post('auth/login', payload)
        return response
    } catch (error) {
        return error.response
    }
}
export const Signup = async(payload)=>{
    try {
        console.log(payload,'signup data');
        const response = await instance.post('auth/signup', payload)
        return response
    } catch (error) {
        return error.response
    }
}

// module.exports = {
//     User
// }