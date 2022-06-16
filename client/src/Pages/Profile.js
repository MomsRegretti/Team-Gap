import React , { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Profile({ user }) {
  useEffect(() => {
    fetch('/usermaps')
    .then(r => r.json())
    .then(data => console.log(data))
  })
  const navigate = useNavigate()
  const { name, username, avatar } = user;

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
    </div>
  )
}

export default Profile