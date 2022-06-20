import React from 'react'
import { Link } from "react-router-dom";


function Navbar({handleLogout, isAuthenticated}) {
  function handleAccountStatus() {
    if (isAuthenticated) {
      return (
        <>
              <Link to="/mapcomments">Maps</Link>
              <Link to='/profile'>Profile</Link>
              <Link to='/agentselector'>Agent Selector</Link>
              <button className='logbutt' onClick={handleLogout}>Logout</button>
        </>
      );
    } else {
      return (
        <>
              <Link to="/login">Login/Sign Up</Link>
              <Link to="/about">About Us</Link>
              <Link to='/agentselector'>Agent Selector</Link>
        </>
      );
    }
  }

  return (
    <div>
        <Link to='/'>Home</Link>
        {handleAccountStatus()}
    </div>
  )
}

export default Navbar