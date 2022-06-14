import React from 'react'
import { useLocation } from "react-router-dom";
function MapDetails() {
    let locate = useLocation();
    const {splash, displayName} = locate.state
    return (
        <div>
            <button onClick={() => console.log(locate)}>hey</button>
            <h1>{displayName}</h1>
            <img src={splash} alt={displayName}/>
        </div>
    )
}

export default MapDetails