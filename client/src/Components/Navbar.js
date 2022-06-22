import React from 'react'
import { Link } from "react-router-dom";
import image from '../Components/preview.png'

function Navbar({ handleLogout, isAuthenticated }) {
  function handleAccountStatus() {
    if (isAuthenticated) {
      return (
        <div className="page-wrapper">
          <div className="nav-wrapper">
            <div className="grad-bar"></div>
            <nav className="navbar">
              <img src={image} alt='title' style={{ marginRight: -400, marginTop: 1, zIndex: -1, height: "80%" }} />
              <img src='https://static.vecteezy.com/system/resources/previews/001/206/236/original/mountain-png.png' style={{ marginLeft: 115, zIndex: 1, height: "80%", width: "60px" }} alt='logo' />
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
              <img src={image} alt='title' style={{ marginRight: -285, marginTop: 1, zIndex: -1, height: "80%" }} />
              <img src='https://static.vecteezy.com/system/resources/previews/001/206/236/original/mountain-png.png' style={{ marginRight: "62.35%", zIndex: 1, height: "80%", width: "60px" }} alt='logo' />
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