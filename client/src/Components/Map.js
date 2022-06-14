import React from 'react'

function Map({user, isAuthenticated, map, setAlert, handleMapCardClick}) {

  return (
    <div>
        <img src={map.listViewIcon} alt={map.displayName} onClick={()=>{handleMapCardClick(map.uuid, map)}}></img>
    </div>
  )
}

export default Map