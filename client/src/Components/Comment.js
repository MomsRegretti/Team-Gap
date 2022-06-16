import React, { useState, useEffect } from 'react'
import Comments from './Comments'

function Comment({ body, user_id }) {
    const [user, setUser] = useState("")
    useEffect(() => {
        fetch(`/users/${user_id}`)
            .then((r) => r.json())
            .then((data) => {
                setUser(data)
                console.log(user)
            })
    },[])
    return (
        <div>
            <div>
                <button onClick={() => console.log(user_id)}>user state</button>
                <img className='avatar' src={user.avatar} alt={user.username} />
                <strong className='comment-header'>{user.username}</strong>
            </div>
            <p>{body}</p>
        </div>
    )
}

export default Comment