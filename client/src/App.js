import './App.css';
import {useState, useEffect} from "react"
import { Routes, Route, useNavigate } from "react-router-dom";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState("");
  const [showForm, setShowForm] = useState(false);

  let navigate = useNavigate();

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

  const handleLogout = () => {
    fetch("/logout", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(setIsAuthenticated(false));
    navigate("/deez")
  };

  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<button onClick={handleLogout}>hello</button>}></Route>
          <Route path="/deez" element={<a>nuts</a>}></Route>
        </Routes>
    </div>
  );
}

export default App;
