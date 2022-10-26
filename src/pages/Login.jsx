import React from 'react';
import {signOut} from "firebase/auth";



const Login = () => {
    return (
        <div className='formContainner'>
            <div className='formWrapper'>
                <span className='logo'>Laytar Chat</span>
                <span className='title'>Register</span>
                <span></span>
                <form>
                    <input type="email" placeholder='email'/>
                    <input type="password" placeholder='password'/>
                    <button>Sign in</button>
                </form>
                <p>You don't have an account? Register</p>
            </div>
        </div>
    )
}

export default Login