import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import useAuth from "../../customhooks/auth";
import "./loginform.scss";

const LoginForm = ({ onClose }) => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [loginValue, setLoginValue] = useState({
        username: "",
        password: "",
    });

    const handleOnChange = (e) => {
        const { value, name } = e.target;
        setLoginValue({ ...loginValue, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(
                "http://localhost:3000/users/login",
                {
                    username: loginValue.username,
                    password: loginValue.password,
                },
                { withCredentials: true }
            );
            if (data.securityToken) {
                login(data.securityToken);
                toast.success("Login Success");
                onClose();
                navigate("/users/profile");
            } else {
                toast.error("Username or Password wrong.");
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error("An error occurred.");
        }
    };

    return (
        <form className='login-form' onSubmit={handleSubmit}>
            <h2 className='heading-login'>Login</h2>
            <label htmlFor='username'></label>
            <input
                placeholder='Username'
                type='text'
                id='username'
                name='username'
                className='formInput'
                value={loginValue.username}
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
                value={loginValue.password}
                required
                onChange={handleOnChange}
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
