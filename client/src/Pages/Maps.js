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
            <div className="teambias-text" style={{marginTop : 30}}><span></span>Select A Map to Comment On!</div>
            <div className="inner-map">
                {renderMaps}
            </div>
        </div>
    )
}

export default Maps