import React from "react";

const LoginForm = () => {
    return (
        <form>
            <label htmlFor='username'></label>
            <input type='text' placeholder='Username' />
            <label htmlFor='password'></label>
            <input type='text' placeholder='Password' />
            <div className='btn-container'>
                <button type='submit'>Login</button>
            </div>
        </form>
    );
};

export default LoginForm;
