import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Profile({ user }) {
  const navigate = useNavigate()
  const { name, username, avatar } = user;

  return (
    <div style={{ margin: 'auto' }} className="page-container">
      <div>
        <h1 style={{ fontFamily: "valorant" }}>Account Details</h1>
        <hr></hr>
        <img className='avatar' src={avatar} alt={username}></img>
        <h2>Name: {name}
        </h2>
        <h3>Username: {username}</h3>
        <button style={{ marginBottom: 20 }} onClick={() => navigate("/editprofile")}>
          Edit Profile
        </button>

      </div>
    </div>
  )
}

export default Profile