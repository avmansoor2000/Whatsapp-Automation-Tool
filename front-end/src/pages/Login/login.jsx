import React from 'react'
import './login.css'

const login = () => {
    return (
        <div className="main-container">
            <div className="login-box">

                <div className="heading">
                    <h1>Login</h1>
                </div>
                <div className="login-form">
                    <form action="">
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder='email' />
                        {/* <br /> */}
                        <label htmlFor="">Password</label>
                        <input type="password" placeholder='password' />
                        <button>submit</button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default login