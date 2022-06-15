import React from 'react'
function Map({ user, isAuthenticated, map, setAlert, handleMapCardClick }) {
  const uuid = map.uuid
  const handleGetComments = (() => {
    fetch(`/maps/${uuid}`)
      .then((r) => r.json())
      .then((data) => console.log(data.comments))
  })
  return (
    <div>
      <img src={map.listViewIcon} alt={map.displayName} onClick={() => { handleMapCardClick(uuid, { map, user }) }}></img>
      <br></br>
      <button onClick={handleGetComments}>comments?</button>
    </div>
  )
}

export default Map