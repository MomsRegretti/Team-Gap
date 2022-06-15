import React from 'react'

function Comment({body, user}) {
    return (
        <div>
            <h4>{user.username}</h4>
            <p>{body}</p>
        </div>
    )
}

export default Comment