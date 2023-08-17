import React, { useState } from "react";
import "./signupform.scss";

const SignupForm = ({ onSubmit, onCancel }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [userCreated, setUserCreated] = useState("");

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userData = {
                username: username,
                password: password,
                email: email,
            };
            const response = await fetch("http://localhost:3000/users/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userData),
            });
            const data = await response.json();
            setUserCreated(data.message);
            onSubmit(userData);
        } catch (error) {
            console.error(error);
        }
        setUsername("");
        setPassword("");
        setEmail("");
    };
    return (
        <form onSubmit={handleSubmit} className='signup-form'>
            <h2 className='heading-login'>Sign up!</h2>
            <label htmlFor='username'></label>
            <input
                placeholder='Username'
                type='text'
                id='username'
                className='formInput'
                value={username}
                required
                onChange={handleUsernameChange}
            />
            <label htmlFor='password'></label>
            <input
                placeholder='Password'
                type='password'
                id='password'
                className='formInput'
                value={password}
                required
                onChange={handlePasswordChange}
            />
            <input
                placeholder='E-Mail'
                type='email'
                id='email'
                className='formInput'
                value={email}
                required
                onChange={handleEmailChange}
            />
            <div className='buttonContainer'>
                <button type='submit' className='btn-login'>
                    Sign Up !
                </button>
            </div>
            {userCreated && <p>{userCreated}</p>}
        </form>
    );
};

export default SignupForm;
