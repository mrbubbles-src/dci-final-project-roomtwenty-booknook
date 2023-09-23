import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "../../customhooks/auth";
import "./signupform.scss";
const SignupForm = ({ onClose, onLogin }) => {
    const { register } = useAuth();
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await register(signupValue);
        // console.log("result", result);
        if (result.success) {
            onClose();
            onLogin();
        } else {
            handleError(result.error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="signup-form">
            <h2 className="heading-login">Sign up!</h2>
            <label htmlFor="username"></label>
            <input
                placeholder="Username"
                type="text"
                id="username"
                className="formInput"
                name="username"
                value={username}
                required
                onChange={handleOnChange}
            />
            <label htmlFor="password"></label>
            <input
                placeholder="Password"
                type="password"
                id="password"
                name="password"
                className="formInput"
                value={password}
                required
                onChange={handleOnChange}
            />
            <input
                placeholder="E-Mail"
                type="email"
                id="email"
                name="email"
                className="formInput"
                value={email}
                required
                onChange={handleOnChange}
            />
            <div className="buttonContainer">
                <button type="submit" className="btn-modal-login">
                    Sign Up !
                </button>
            </div>
            <ToastContainer />
        </form>
    );
};

export default SignupForm;
