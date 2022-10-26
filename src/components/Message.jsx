import React from 'react'
import Girl from '../img/t3ZuqDMxahw.jpg'


const Message = () => {
    return(
        <div className='message owner'>
            <div className="messageInfo">
                <img src={Girl} alt="" />
                <span>just now</span>
            </div>
            <div className="messageContent">
                <p>hello</p>
                <img src={Girl} alt="" />
            </div>
        </div>
    )
}

export default Message