import React from 'react'
import Comments from './Comments'

function Comment({ body, user }) {
    return (
        <div>
            <div>
                <img className='avatar' src={user.avatar} alt={user.username} />
                <strong className='comment-header'>{user.username}</strong>
            </div>
            <p>{body}</p>
        </div>
    )
}

export default Comment