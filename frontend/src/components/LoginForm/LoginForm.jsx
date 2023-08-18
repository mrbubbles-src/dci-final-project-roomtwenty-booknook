import React, { useState } from "react";
import "../LoginForm/loginform.scss";

const LoginForm = ({ onSubmit, onClose }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ username, password });
        setUsername("");
        setPassword("");
        onClose();
    };

    return (
        <form className='login-form' onSubmit={handleSubmit}>
            <h2 className='heading-login'>Login</h2>
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
            <div className='buttonContainer'>
                <button className='btn-login' type='submit'>
                    Login
                </button>
            </div>
        </form>
    );
};

export default LoginForm;
