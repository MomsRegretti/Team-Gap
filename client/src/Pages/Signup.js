import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signup({ setUser, setIsAuthenticated }) {
    const [error, setError] = useState([]);
    const [signUpData, setSignUpData] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
    });

    const navigate = useNavigate()

    const configObjPOST = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(signUpData),
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("/signup", configObjPOST).then((res) => {
            if (res.ok) {
                res.json().then((user) => {
                    setUser(user);
                    setIsAuthenticated(true);
                    setError([]);
                    navigate("/");
                });
            } else {
                res.json().then((json) => setError(json.error));
            }
        });
    };

    const handleChange = (e) => {
        const key = e.target.name;
        setSignUpData({
            ...signUpData,
            [key]: e.target.value,
        });
    };




    return (
        <div>
            <div>
                <h2>Welcome to Team Gap!</h2>
                <h4>Hub for Valorant Team Composition and Stategies!</h4>
                <h1>Get started by signing up!</h1>
            </div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>Name</label>
                <input
                type="text"
                placeholder="Name..."
                onChange={handleChange}
                value={signUpData.name}
                name="name">
                </input>
                <label>Username</label>
                <input
                type="text"
                placeholder="Username..."
                onChange={handleChange}
                value={signUpData.username}
                name="username">
                </input>
                <label>Email</label>
                <input
                type="text"
                placeholder="Email..."
                onChange={handleChange}
                value={signUpData.email}
                name="email">
                </input>
                <label>Password</label>
                <input
                type="text"
                placeholder="Password..."
                onChange={handleChange}
                value={signUpData.password}
                name="password">
                </input>
                <button type="submit" >Create Account</button>
                {error ? (<strong>{error}</strong>) : null}
            </form>
        </div>
    )
}

export default Signup