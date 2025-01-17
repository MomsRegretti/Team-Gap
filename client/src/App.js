import './App.css';
import { useState, useEffect } from "react"
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from './Components/Navbar';
import Login from './Components/Login'
import About from './Pages/About'
import Maps from './Pages/Maps'
import Signup from './Pages/Signup'
import Profile from './Pages/Profile'
import EditProfileForm from './Pages/EditProfileForm'
import MapDetails from './Pages/MapDetails'
import AgentSelector from './Pages/AgentSelector';
import Home from './Pages/Home';
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState("");
  const [maps, setMaps] = useState([])
  const [agents, setAgents] = useState([])
  const [mapsLoaded, setMapsLoaded] = useState(false)
  const [agentsLoaded, setAgentsLoaded] = useState(false)

  let navigate = useNavigate();

  useEffect(() => {
    fetch("/apimaps")
      .then((r) => r.json())
      .then((data) => {
        setMaps(data)
        setMapsLoaded(true)
      })
    fetch('/agents')
      .then(r => r.json())
      .then(data => {
        setAgents(data)
        setAgentsLoaded(true)
      })
  }, [])

  useEffect(() => {
    fetch("/authorized_user").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setUser(user);
          setIsAuthenticated(true);
        });
      }
    });
  }, []);

  const handleMapCardClick = (id, map) => {
    navigate(`/details/${id}`, { replace: true, state: map });
  };

  const handleLogout = () => {
    fetch("/logout", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(setIsAuthenticated(false))
      .then(setUser(""));
    navigate("/")
  };

  function handleUser(user) {
    setUser(user);
  }

  function handleAuth(value) {
    setIsAuthenticated(value);
  }

  return (
    <div className="App">
      <Navbar handleLogout={handleLogout} isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/" element=
          {
            <Home user={user}/>
          }>
        </Route>
        <Route path="/login" element=
          {
            <Login setUser={handleUser} setIsAuthenticated={handleAuth} />
          }>
        </Route>
        <Route path='/about' element=
          {
            <About />
          }>
        </Route>
        <Route path='/mapcomments' element=
          {
            <Maps maps={maps} user={user} handleMapCardClick={handleMapCardClick} isAuthenticated={isAuthenticated} />
          }>
        </Route>
        <Route path="/details/:id" element=
          {
            <MapDetails />
          }>
        </Route>
        <Route path='/signup' element=
          {
            <Signup setUser={handleUser} setIsAuthenticated={handleAuth} />
          }>
        </Route>
        <Route path='/profile' element=
          {
            <Profile user={user} />
          }>
        </Route>
        <Route path='/editprofile' element=
          {
            <EditProfileForm user={user} setUser={handleUser} />
          }>
        </Route>
        <Route path='/agentselector' element=
          {
            <AgentSelector agents={agents} agentsLoaded={agentsLoaded} mapsLoaded={mapsLoaded} maps={maps} />
          }>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
