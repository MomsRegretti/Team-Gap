import React from 'react'
function Map({ user, isAuthenticated, map, setAlert, handleMapCardClick }) {
  const uuid = map.uuid
  const handleGetComments = (() => {
    fetch(`/maps/${uuid}`)
      .then((r) => r.json())
      .then((data) => console.log(data.comments))
  })
  return (
    <div className='mapcontainer'>
      <div className='child'>
        <img className='map-image' src={map.splash} alt={map.displayName} onClick={() => { handleMapCardClick(uuid, { map, user }) }}></img>
        <br></br>
      </div>
    </div>
  )
}

export default Map