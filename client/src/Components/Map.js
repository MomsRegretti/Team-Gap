import React from 'react'
function Map({ user, isAuthenticated, map, handleMapCardClick }) {
  const uuid = map.uuid

  return (
    <div className='child'>
      <img className='map-image' src={map.splash} alt={map.displayName} onClick={() => { handleMapCardClick(uuid, { map, user }) }}></img>
    </div>
  )
}

export default Map