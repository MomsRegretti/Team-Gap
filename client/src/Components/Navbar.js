import React from 'react'
import { Link, useNavigate } from "react-router-dom";

function Navbar({ handleLogout, isAuthenticated }) {
  let navigate = useNavigate();

  function handleAccountStatus() {
    if (isAuthenticated) {
      return (
        <div className="page-wrapper">
          <div className="nav-wrapper">
            <div className="grad-bar"></div>
            <nav className="navbar">
              <div onClick={() => navigate("/")} className='logo-container'>
                <li className='logo-text' style={{ marginRight: 5 }}>Team</li>
                <img  src='https://static.vecteezy.com/system/resources/previews/001/206/236/original/mountain-png.png' style={{ zIndex: 1, height: "80%", width: "60px" }} alt='logo' />
                <li className='logo-text'>Canyon</li>
              </div>
              <ul className="nav">
                <li className="nav-item"><Link className="navbar" to="/mapcomments">Maps</Link></li>
                <li className="nav-item"><Link className="navbar" to='/profile'>Profile</Link></li>
                <li className="nav-item"><Link className="navbar" to='/agentselector'>Agent Selector</Link></li>
                <li className="nav-item"><Link className="navbar" to="/about">About</Link></li>
                <li className="nav-item" onClick={handleLogout}><Link className="navbar" to="/login">Logout</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      );
    } else {
      return (
        <div className="page-wrapper">
          <div className="nav-wrapper">
            <div className="grad-bar"></div>
            <nav className="navbar">
              <div onClick={() => navigate("/")} className='logo-container' style={{ marginRight: "56.35%" }}>
                <li className='logo-text' style={{ marginRight: 5 }}>Team</li>
                <img onClick={() => navigate("/")} src='https://static.vecteezy.com/system/resources/previews/001/206/236/original/mountain-png.png' style={{ zIndex: 1, height: "80%", width: "60px" }} alt='logo' />
                <li className='logo-text'>Canyon</li>
              </div>
              <ul className="nav">
                <li className="nav-item"><Link className="navbar" to="/">Home</Link></li>
                <li className="nav-item"><Link className="navbar" to="/about">About</Link></li>
                <li className="nav-item"><Link className="navbar" to='/agentselector'>Agent Selector</Link></li>
                <li className="nav-item"><Link className="navbar" to="/login">Login</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      );
    }
  }

  return (
    <div>
      {handleAccountStatus()}
    </div>
  )
}

export default Navbar