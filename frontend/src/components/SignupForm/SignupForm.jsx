import React, { useState } from "react";
import "./signupform.scss";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const SignupForm = ({ onClose }) => {
    const navigate = useNavigate();
    const [signupValue, setSignupValue] = useState({
        username: "",
        password: "",
        email: "",
    });

    const { email, password, username } = signupValue;
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setSignupValue({
            ...signupValue,
            [name]: value,
        });
    };

    const handleError = (err) =>
        toast.error(err, {
            position: "bottom-left",
        });
    const handleSuccess = (msg) =>
        toast.success(msg, {
            position: "bottom-right",
        });
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(
                "http://localhost:3000/users/signup",
                { ...signupValue },
                { withCredentials: true }
            );
            const { success, message } = data;
            if (success) {
                handleSuccess(message);
                onClose();
                setTimeout(() => {
                    navigate("/");
                }, 1000);
            } else {
                handleError(message);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className='signup-form'>
            <h2 className='heading-login'>Sign up!</h2>
            <label htmlFor='username'></label>
            <input
                placeholder='Enter your username'
                type='text'
                id='username'
                className='formInput'
                name='username'
                value={username}
                required
                onChange={handleOnChange}
            />
            <label htmlFor='password'></label>
            <input
                placeholder='Password'
                type='password'
                id='password'
                name='password'
                className='formInput'
                value={password}
                required
                onChange={handleOnChange}
            />
            <input
                placeholder='E-Mail'
                type='email'
                id='email'
                name='email'
                className='formInput'
                value={email}
                required
                onChange={handleOnChange}
            />
            <div className='buttonContainer'>
                <button type='submit' className='btn-login'>
                    Sign Up !
                </button>
            </div>
        </form>
    );
};

export default SignupForm;
