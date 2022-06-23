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
        <div className="page-container" style={{ margin : ' 10% auto'}}>
            <div>
                <h2>Welcome to Team Gap!</h2>
                <h4>Your Go-To Hub for Valorant Team Composition and Stategies!</h4>
                <h4>Get started by signing up!</h4>
            </div>
            <form className='form' onSubmit={(e) => handleSubmit(e)}>
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
                <button className="butt" type="submit" >Create Account</button>
                {error ? (<strong>{error}</strong>) : null}
            </form>
            <div>
                <h4>Already have an account?</h4>
                <button className="butt" onClick={() => navigate("/login")}>Login</button>
            </div>
        </div>
    )
}

export default Signup