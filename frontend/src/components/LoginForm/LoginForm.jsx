import { useState } from "react";
import "../LoginForm/loginform.scss";

const LoginForm = ({ onSubmit, onCancel }) => {
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
    };
    return (
        <form onSubmit={handleSubmit}>
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
            <br />
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
            <br />
            <div className='buttonContainer'>
                <button type='submit'>Login</button>
                <button type='button' onClick={onCancel}>
                    Cancel
                </button>
            </div>
        </form>
    );
};

export default LoginForm;
