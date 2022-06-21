import React from 'react'
import Map from '../Components/Map'
function Maps({ maps, user, isAuthenticated, handleMapCardClick }) {

    const renderMaps = maps.map((map) => {
        return (
            <Map
                key={map.uuid}
                map={map}
                user={user}
                isAuthenticated={isAuthenticated}
                handleMapCardClick={handleMapCardClick}
            />
        );
    }
    );

    return (
        <div className="mapcontainer">
            {renderMaps}
        </div>
    )
}

export default Maps