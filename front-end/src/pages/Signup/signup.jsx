import React from 'react'
import './signup.css'

const signup = () => {
  return (
    <div className="main-container">
        <div className="signup-box">
            <div className="heading">
                    <h1>Signup</h1>
                </div>
            <div className="form-box">
                <form action="">
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder='name' />
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder='email' />
                    <label htmlFor="">Phone Number</label>
                    <input type="text" placeholder='phone number' />
                    <label htmlFor="">Password</label>
                    <input type="text" placeholder='password' />
                    <button>submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default signup