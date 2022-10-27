import React from 'react'
// import {add} from '../img/add.png';
import Add from '../img/addAvatar.png'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
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

const Register = () => {

    const [error, setError] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;

                console.log(user)
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode)
                console.log(errorMessage)
            })
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)
            const storageRef = ref(storage, displayName);
            console.log(res)
            const uploadTask = uploadBytesResumable(storageRef, file);
            console.log(uploadTask)
            uploadTask.on(
                (error) => {
                    console.log('1')
                    console.log(error)
                    setError(true)
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        console.log('downloadURL')
                        console.log(downloadURL)
                        await updateProfile(res.user, {
                            displayName,
                            photoURL: downloadURL
                        })
                        await setDoc(doc(db, "users", res.user.uid), {
                            uid: res.user.uid,
                            displayName,
                            email,
                            photoURL: downloadURL
                        })
                        await setDoc(doc(db, "userChats", res.user.uid), {});
                        navigate('/')
                    })
                }
            )
        }
        catch (error) {
            console.log('2')
            console.log(error)
            setError(true)
        }
    }

    return (
        <div className='formContainner'>
            <div className='formWrapper'>
                <span className='logo'>Laytar Chat</span>
                <span className='title'>Register</span>
                <span></span>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='display name' />
                    <input type="email" placeholder='email' />
                    <input type="password" placeholder='password' />
                    <input style={{ display: 'none' }} type="file" id='file' />
                    <label htmlFor="file">
                        <img src={Add} alt="" />
                        <span>Add an avatar</span>
                    </label>
                    <button>Sign up</button>
                    {error && <span>Error</span>}
                </form>
                <p>You do have an account? <Link to='/login'>Login</Link></p>
            </div>
        </div>
    )
}

export default Register