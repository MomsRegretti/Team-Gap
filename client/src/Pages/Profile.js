import React , { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Profile({ user }) {
  const navigate = useNavigate()
  const [uniq, setUniq] = useState([])
  const { name, username, avatar, maps } = user;

  useEffect(() => {
    fetch('usermaps')
    .then(r=> r.json())
    .then(data => setUniq(data))
  },[])
  return (
    <div>
      <div>
        <h1>Account Details</h1>
        <hr></hr>
        <h2>Name: {name}
        <img className='avatar' src={avatar} alt={username}></img>
        </h2>
        <h3>Username: {username}</h3>
        <button className="me-2" onClick={() => navigate("/editprofile")}>
          Edit Profile
        </button>
        
      </div>
      {maps ? uniq.map((map) => {
          return <img key={map.uuid} src={map.listViewIcon} alt={map.displayName}/>
        }): null}
    </div>
  )
}

export default Profile