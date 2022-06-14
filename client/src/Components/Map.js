import React from 'react'

function Map({user, isAuthenticated, map, setAlert}) {
    const handleClick = () => {
        
    }
  return (
    <div>
        <img src={map.listViewIcon} alt={map.displayName}></img>
    </div>
  )
}

export default Map