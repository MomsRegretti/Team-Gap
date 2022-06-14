import React from 'react'
import { useNavigate } from 'react-router-dom'

function Profile({ user }) {
  const navigate = useNavigate()
  const { name, username } = user;
  return (
    <div>
      <div >
        <h1>Account Details</h1>
        <hr></hr>
        <h2>Name: {name}</h2>
        <h3>Username: {username}</h3>
        <button className="me-2" onClick={() => navigate("/editprofile")}>
          Edit Profile
        </button>
      </div>
    </div>
  )
}

export default Profile