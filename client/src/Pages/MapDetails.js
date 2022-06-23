import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";
import Comments from '../Components/Comments';
function MapDetails() {
    let locate = useLocation();
    let { splash, displayIcon, displayName, uuid } = locate.state.map
    const [comments, setComments] = useState([])
    const [errors, setErrors] = useState([])

    useEffect(() => {
        fetch(`/maps/${uuid}`)
            .then((res) => {
                if (res.ok) {
                    res.json()
                        .then((data) => {
                            setComments(data.comments)
                        })
                } else {
                    setComments([])
                }
            })
    }, [uuid])

    const user = locate.state.user

    const handleNewComment = (newComment) => {
        setComments([...comments, newComment])
    }

    const handleErrors = (errors) => {
        setErrors(errors)
    }
    return (
        <div className="page-container">
            <h1 style={{ fontFamily: "valorant" }}>{displayName}</h1>
            <img className="splash" src={splash} alt={displayName} />
            <img className="splash" src={displayIcon} alt={displayName} />
            <Comments handleNewComment={handleNewComment} handleErrors={handleErrors} errors={errors} comments={comments} map={locate.state.map} user={user} uuid={uuid} />
        </div>
    )
}

export default MapDetails