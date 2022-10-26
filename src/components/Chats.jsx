import React from 'react'
import loingram from '../img/a4733b5e29d9484587585bc2f82faabe1e229a51.jpg'


const Chats = () => {
    return(
        <div className='chats'>
            <div className="userChat">
                <img src={loingram} alt="" />
                <div className='userChatInfo'>
                    <span>Jane</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className="userChat">
                <img src={loingram} alt="" />
                <div className='userChatInfo'>
                    <span>Jane</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className="userChat">
                <img src={loingram} alt="" />
                <div className='userChatInfo'>
                    <span>Jane</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className="userChat">
                <img src={loingram} alt="" />
                <div className='userChatInfo'>
                    <span>Jane</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className="userChat">
                <img src={loingram} alt="" />
                <div className='userChatInfo'>
                    <span>Jane</span>
                    <p>Hello</p>
                </div>
            </div>
        </div>
    )
}

export default Chats