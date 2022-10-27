import React from 'react'

import loingram from '../img/a4733b5e29d9484587585bc2f82faabe1e229a51.jpg'
import { useState } from 'react'
import {
    collection,
    query,
    where,
    getDocs,
    setDoc,
    doc,
    updateDoc,
    serverTimestamp,
    getDoc,
} from "firebase/firestore";
import { db } from '../firebase'
import { useContext } from "react";
import { AuthContext } from '../context/AuthContext';

const Search = () => {

    const [username, setUserName] = useState("")
    const [user, setUser] = useState(null)
    const [error, setError] = useState(false)

    const { currentUser } = useContext(AuthContext)

    const handleSearch = async () => {
        const q = query(collection(db, 'users'), where('displayName', '==', username));

        try {
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setUser(doc.data())
            });
        }
        catch {
            setError(true)
        }
    }

    const handleKey = e => {
        e.code === 'Enter' && handleSearch()
    }
    const handleSelect = async () => {
        //check wheter the group exists
        const combinedId =
            currentUser.uid > user.uid
                ? currentUser.uid + user.uid
                : user.uid + currentUser.uid
        try {
            const res = await getDoc(doc(db, 'chats', combinedId))
            if (!res.exists()) {
                await setDoc(doc(db, 'chats', combinedId), { messages: [] })
                await updateDoc(doc(db, "userChats", currentUser.uid), {
                    [combinedId + ".userInfo"]: {
                        uid: user.uid,
                        displayName: user.displayName,
                        photoURL: user.photoURL,
                    },
                    [combinedId + ".date"]: serverTimestamp(),
                });

                await updateDoc(doc(db, "userChats", user.uid), {
                    [combinedId + ".userInfo"]: {
                        uid: currentUser.uid,
                        displayName: currentUser.displayName,
                        photoURL: currentUser.photoURL,
                    },
                    [combinedId + ".date"]: serverTimestamp(),
                });

            }
        }
        catch(err) {
            setError(true)
            console.log(err)
        }
        setUser(null)
        setUserName("")
    }

    return (
        <div className='search'>
            <div className="searchForm">
                <input type="text" placeholder='find a user' onKeyDown={handleKey} onChange={e => setUserName(e.target.value)} />
            </div>
            {error && <span>Uers not found</span>}
            {user && <div className="userChat" onClick={handleSelect}>
                <img src={user.photoURL} alt="" />
                <div>
                    <span>{user.displayName}</span>
                </div>
            </div>}
        </div>
    )
}

export default Search