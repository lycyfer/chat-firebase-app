import React from 'react'

import loingram from '../img/a4733b5e29d9484587585bc2f82faabe1e229a51.jpg'

const Search = () => {
    return (
        <div className='search'>
            <div className="searchForm">
                <input type="text" placeholder='find a user'/>
            </div>
            <div className="userChat">
                <img src={loingram} alt="" />
                <div>
                    <span>Jane</span>
                </div>
            </div>
        </div>
    )
}

export default Search