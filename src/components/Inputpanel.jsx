import React from 'react';
import Img from '../img/img.png'
import Attach from '../img/attach.png'

const Inputpanel = () => {
    return (
        <div className='inputPanel'>
            <input type="text" placeholder='Type something...'/>
            <div className='send'>
                <img src={Attach} alt="" />
                <input type="file" style={{display: 'none'}} id='file'/>
                <label htmlFor="file">
                    <img src={Img} alt="" />
                </label>
                <button>Send</button>
            </div>
        </div>
    )
}

export default Inputpanel