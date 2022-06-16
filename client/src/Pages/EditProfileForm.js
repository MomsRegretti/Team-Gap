import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'

function EditProfileForm({ user, setUser }) {
    const [formData, setFormData] = useState({
        avatar: user.avatar,
        name: user.name,    
        username: user.username,
        age: user.age,
    });
    const navigate = useNavigate()
    const { name, avatar , username } = user;
    const handleChange = (e) => {
        const key = e.target.name;
        setFormData({
            ...formData,
            [key]: e.target.value,
        });
    };


    const configObjPATCH = {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(formData),
    };

    const handleEditProfile = (e) => {
        e.preventDefault();
        fetch(`/users/${user.id}`, configObjPATCH)
            .then(res => res.json())
            .then(data => {
                setUser(data)
                navigate('/profile')
            })
    };

    return (
        <div>
            <h1>Edit Profile</h1>
            <div>
                <form onSubmit={(e) => handleEditProfile(e)}>
                    <label>Name</label>
                    <input type="text"
                        placeholder={name}
                        onChange={handleChange}
                        value={formData.name}
                        name="name" />
                    <label>Username</label>
                    <input type="text"
                        placeholder={username}
                        onChange={handleChange}
                        value={formData.username}
                        name="username" />
                    <label>Avatar</label>
                    <input type="text"
                        placeholder={avatar}
                        onChange={handleChange}
                        value={formData.avatar}
                        name="avatar" />
                    <button type="submit">Save changes</button>
                </form>
            </div>
            <div>
                <button onClick={() => navigate("/profile")}>Discard Changes and Return to Profile</button>
            </div>
        </div>
    )
}

export default EditProfileForm