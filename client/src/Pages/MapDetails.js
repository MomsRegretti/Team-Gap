import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import Comments from '../Components/Comments';
function MapDetails({}) {
    let navigate = useNavigate()
    let locate = useLocation();
    let { splash, displayName, uuid } = locate.state.map
    const [comments, setComments] = useState([])
    const [errors, setErrors] = useState([])
    const [railsMap, setRailsMap] = useState([])

    // useEffect(() => {
    //     const thisMap = mapHolders.filter(mapHolder => mapHolder.uuid === uuid)
    //     setRailsMap(thisMap[0])
    // }, [])

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
    }, [])

    const user = locate.state.user

    const handleNewComment = (newComment) => {
        setComments([...comments, newComment])
    }

    const handleErrors = (errors) => {
        setErrors(errors)
    }
    return (
        <div>
            <button onClick={() => console.log(locate.state.user)}>hey</button>
            <h1>{displayName}</h1>
            <img src={splash} alt={displayName} />
            <Comments railsMap={railsMap} handleNewComment={handleNewComment} handleErrors={handleErrors} errors={errors} comments={comments} map={locate.state.map} user={user} uuid={uuid} />
        </div>
    )
}

export default MapDetails