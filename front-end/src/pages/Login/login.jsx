import React,{useState} from 'react'
import {useForm} from 'react-hook-form'
import {User} from '../../api/User'
import './login.css'

const login = () => {
    const {register,handleSubmit} = useForm()
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const onSubmit = async(req,res) => {

        try{
        const formData = {
            email : email,
            password : password
        }
        const response = await User(formData)
        console.log('response waiting');

        if(response.success){
            console.log(response);
          }else{
            console.log(response);
          }
    }catch(error){
        console.error('Error Login:', error);
    }
    }
    return (
        <div className="main-container">
            <div className="login-box">

                <div className="heading">
                    <h1>Login</h1>
                </div>
                <div className="login-form">
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="">Email</label>
                        <input 
                        {...register("email", { required: true })}
                        onChange={(e)=>setEmail(e.target.value)}
                        type="email" placeholder='email' />
                        {/* <br /> */}
                        <label htmlFor="">Password</label>
                        <input 
                        {...register("password", { required: true })}
                        onChange={(e)=>setPassword(e.target.value)}
                        type="password" placeholder='password' />
                        <button>submit</button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default login