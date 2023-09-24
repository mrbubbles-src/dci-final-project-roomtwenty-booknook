import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "../../customhooks/auth";
import "./loginform.scss";

const LoginForm = ({ onClose, onLogin }) => {
    const { login } = useAuth();
    const [loginValue, setLoginValue] = useState({
        username: "",
        password: "",
    });

    const handleOnChange = (e) => {
        const { value, name } = e.target;
        setLoginValue({ ...loginValue, [name]: value });
    };

    const handleError = (err) =>
        toast.error(err, {
            position: "bottom-left",
        });

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     // console.log("submit");
    //     const success = await login({
    //         username: loginValue.username,
    //         password: loginValue.password,
    //     });

    //     if (success) {
    //         onClose();
    //         onLogin();
    //     } else {
    //         handleError("Username or Password wrong.");
    //     }
    // };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await login({
            username: loginValue.username,
            password: loginValue.password,
        });

        if (result.success) {
            onClose();
            onLogin();
        } else {
            // Display the error message
            if (result.error != "An unknown error occurred") {
                handleError(result.error);
            } else {
                handleError("Benutzername oder Passwort falsch");
            }
        }
    };

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <h2 className="heading-login">Login</h2>
            <label htmlFor="username"></label>
            <input
                placeholder="Username"
                type="text"
                id="username"
                name="username"
                className="formInput"
                value={loginValue.username}
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
                value={loginValue.password}
                required
                onChange={handleOnChange}
            />
            <div className="buttonContainer">
                <button className="btn-modal-login" type="submit">
                    Login
                </button>
            </div>
            {/* <ToastContainer /> */}
        </form>
    );
};

export default LoginForm;
