import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Map from '../Components/Map'
function Maps({ user, isAuthenticated, handleMapCardClick }) {
    const [maps, setMaps] = useState([])
    const [alert, setAlert] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        fetch("/maps")
            .then((r) => r.json())
            .then((data) => setMaps(data.data))
    }, [])

    const handleAlert = () => setAlert

    const renderMaps = maps.map((map) => {
        return (
            <Map
                key={map.uuid}
                map={map}
                user={user}
                isAuthenticated={isAuthenticated}
                setAlert={handleAlert}
                handleMapCardClick={handleMapCardClick}
            />
        );
    }
    );

    return (

        <div>
            {renderMaps}
        </div>
    )
}

export default Maps