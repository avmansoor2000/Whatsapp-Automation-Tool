import instance from './instence'

export const User = async(payload)=>{
    try {
        const response = await instance.post('auth/login', payload)
        return response
    } catch (error) {
        return error.response
    }
}

// module.exports = {
//     User
// }