import React from 'react';
import loingram from '../img/a4733b5e29d9484587585bc2f82faabe1e229a51.jpg'

const Navbar = () => {
    return(
        <div className='navbar'>
           <span className='logo'>Laytar Chat</span>
           <div className="user">
            <img src={loingram} alt="" />
            <span>Vitalik</span>
            <button>logout</button>
           </div>
        </div>
    )
}

export default Navbar