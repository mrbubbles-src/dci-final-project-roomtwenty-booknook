import { useState } from "react";
import { Link } from "react-router-dom";
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
                <button type='submit'>Login</button>
                <button type='button' onClick={onCancel}>
                    Cancel
                </button>
            </div>
            <p className='login-text'>
                Noch kein Mitglied? Registriere dich{" "}
                <Link to='/' className='site-links'>
                    hier
                </Link>
                !
            </p>
        </form>
    );
};

export default LoginForm;
