import React from 'react';
import loingram from '../img/a4733b5e29d9484587585bc2f82faabe1e229a51.jpg'
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useContext } from "react";
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {

    const {currentUser} = useContext(AuthContext)

    return(
        <div className='navbar'>
           <span className='logo'>Laytar Chat</span>
           <div className="user">
            <img src={currentUser.photoURL} alt="" />
            <span>{currentUser.displayName}</span>
            <button onClick={()=> signOut(auth)}>logout</button>
           </div>
        </div>
    )
}

export default Navbar