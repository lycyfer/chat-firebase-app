import React from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, storage, db } from '../firebase'
import { useState } from 'react';
import {
    ref,
    uploadBytesResumable,
    getDownloadURL
}
    from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from 'react-router-dom';


const Login = () => {


    const [error, setError] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();

        const email = e.target[0].value;
        const password = e.target[1].value;

        try {
            await signInWithEmailAndPassword(auth, email, password)
            navigate("/")
        }
        catch (error) {
            setError(true)
        }
    }


    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>Laytar Chat</span>
                <span className='title'>Register</span>
                <span></span>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder='email' />
                    <input type="password" placeholder='password' />
                    <button>Sign in</button>
                    {error && <span>Error</span>}
                </form>
                <p>You don't have an account? <Link to='/register'>Register</Link></p>
            </div>
        </div>
    )
}

export default Login