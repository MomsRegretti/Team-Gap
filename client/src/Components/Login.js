import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Login({ setUser, setIsAuthenticated }) {

    const [usernameInput, setUsernameInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");

    const [error, setError] = useState([]);

    const navigate = useNavigate()

    const user = {
        username: usernameInput,
        password: passwordInput,
    };

    const configObjPOST = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(user),
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("/login", configObjPOST).then((res) => {
            if (res.ok) {
                res.json().then((user) => {
                    setUser(user);
                    setIsAuthenticated(true);
                    setError([]);
                    navigate('/')
                });
            } else {
                res.json().then((json) => setError(json.error));
            }
        });
    };


    return (
        <div>
            <div>
                <h2>Welcome Back</h2>
                <h4>Team Gap</h4>
                <h1>Login</h1>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <label>Username</label>
                    <input
                        type="text"
                        placeholder='Username'
                        onChange={(e) => setUsernameInput(e.target.value)}
                        value={usernameInput}
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder='Password'
                        onChange={(e) => setPasswordInput(e.target.value)}
                        value={passwordInput}
                    />
                    <button type="submit">Submit</button>
                    <>
                    {error ? (<strong>{error}</strong>) : null}
                    </>
                </form>
            </div>
            <div>
                <h4>Don't have an account?</h4>
                <button onClick={() => navigate("/signup")}>Sign Up</button>
            </div>

        </div>
    )
}

export default Login