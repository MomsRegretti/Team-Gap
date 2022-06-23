import React, { useState } from 'react'
import Comment from './Comment'

function Comments({ comments, handleErrors, errors, handleNewComment, user, map, uuid }) {

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
            map,
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
        <div className="comment-container">
            <div>
                <div>
                    <h3 style={{ fontFamily: "valorant" }}>{comments.length} Comments</h3>
                    {comments.map((comment) => {
                        return <Comment key={comment.id} body={comment.body} user_id={comment.user_id}></Comment>
                    })}
                </div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <textarea name="body" onChange={handleChange} value={commentData.body} placeholder="Start writing..."></textarea>
                    <button className="butt" type="submit">Post your comment</button>
                </form>
                {errors ? <strong>{errors}</strong> : null}
            </div>
        </div>
    )
}

export default Comments