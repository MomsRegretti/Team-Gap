import React, { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Comment from './Comment'

function Comments({ railsMap, comments, handleErrors, errors, handleNewComment, user, map, uuid }) {
    const navigate = useNavigate()
    
    // useEffect(() => {
    //     fetch(`/mapas/${uuid}`)
    //         .then((r) => r.json())
    //         .then((data) => setComments(data))
    // }, [uuid])

    const [commentData, setCommentData] = useState({
        body: "",
        category: ""
    });

    const configObjPOST = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            uuid,
            splash: map.splash,
            displayName: map.displayName,
            user_id: user.id,
            map_id: railsMap.id,
            body: commentData.body,
            category: commentData.category,
        }),
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`/comments`, configObjPOST)
            .then((res) => {
                if (res.ok) {
                    res.json()
                        .then((newComment) => {
                            handleNewComment(newComment)
                            setCommentData({
                                body: "",
                                category: ""
                            });
                        })
                } else {
                    res.json().then((err) => handleErrors(err.errors))
                }
            })
    };

    const handleChange = (e) => {
        setCommentData({ ...commentData, [e.target.name]: e.target.value });
    };

    return (
        <div className="container">
            <div>
                <div>
                    <h2>{comments.length} comments</h2>
                    {comments.map((comment) => {
                        return <Comment key={comment.id} body={comment.body} user={user}></Comment>
                    })}
                </div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <textarea name="body" onChange={handleChange} value={commentData.body} placeholder="Start writing..."></textarea>
                    <input name="category" onChange={handleChange} value={commentData.category} placeholder="Category"></input>
                    <button type="submit">Post your comment</button>
                </form>
                {errors ? <strong>{errors}</strong> : null}
                <button onClick={() => console.log(comments)}>comment data</button>
                <button onClick={() => console.log(uuid)}>uuid</button>
            </div>
        </div>
    )
}

export default Comments