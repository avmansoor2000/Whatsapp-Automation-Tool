import React,{ useState} from 'react'
import { useForm } from 'react-hook-form'
import { Signup } from '../../api/User'
import './signup.css'

const signup = () => {
    const {register,handleSubmit} =useForm()
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [number,setNumber] = useState("")

    const onSubmit = async(req,res) => {
        try{
            const formData = {
                name: name,
                email: email,
                password: password,
                number: number
            }
            const response = await Signup(formData)

            if(response.success){
                console.log(response);
            }else{
                console.log(response);
            }
        }catch(error){
            console.log('error');
        }
    }
  return (
    <div className="main-container">
        <div className="signup-box">
            <div className="heading-box">
                    <h1>Signup</h1>
                </div>
            <div className="form-box" onSubmit={handleSubmit(onSubmit)}>
                <form className='form' action="">
                    <label htmlFor="">Name</label>
                    <input
                     type="name" placeholder='name' 
                     {...register("name", { required: true })}
                     onChange={(e)=>setName(e.target.value)}
                     />
                    <label htmlFor="">Email</label>
                    <input 
                    type="email" placeholder='email'
                    {...register("email", {required: true})}
                    onChange={(e)=>setEmail(e.target.value)}
                     />
                    <label htmlFor="">Phone Number</label>
                    <input
                     type="number" placeholder='phone number'
                     {...register("number", {required: true})}
                     onChange={(e) => setNumber(e.target.value)}
                      />
                    <label htmlFor="">Password</label>
                    <input 
                    type="password" placeholder='password'
                    {...register("password", {required: true})}
                    onChange={(e) => setPassword(e.target.value)}
                     />
                    <button >submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default signup