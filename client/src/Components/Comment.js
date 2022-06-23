import React, { useState, useEffect } from 'react'

function Comment({ body, user_id }) {
    const [user, setUser] = useState("")

    useEffect(() => {
        fetch(`/users/${user_id}`)
            .then((r) => r.json())
            .then((data) => {
                setUser(data)
            })
    },[user_id])
    return (
        <div className="single-container">
            <div style={{display: "grid", width: "fit-content"}}>
                <img className='avatar' src={user.avatar} alt={user.username} />
                <strong style={{gridColumn: 2, alignSelf: 'end'}}>{user.username}</strong>
                <p className="comment-body">{body}</p>
            </div>
        </div>
    )
}

export default Comment