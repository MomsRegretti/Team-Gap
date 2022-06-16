import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Map from '../Components/Map'
function Maps({ maps, user, isAuthenticated, handleMapCardClick }) {
    const [alert, setAlert] = useState(false)
    const navigate = useNavigate()
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