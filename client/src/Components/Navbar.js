import React from 'react'

function Navbar({handleLogout, isAuthenticated}) {
  function handleAccountStatus() {
    if (isAuthenticated) {
      return (
        <>
              <a href="/mapcomments">Maps</a>
              <a href='/profile'>Profile</a>
              <button className='logbutt' onClick={handleLogout}>Logout</button>
        </>
      );
    } else {
      return (
        <>
              <a href="/login">Login/Sign Up</a>
              <a href="/about">About Us</a>
        </>
      );
    }
  }

  return (
    <div>
        <a href='/'>Home</a>
        {handleAccountStatus()}
    </div>
  )
}

export default Navbar