import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import "../LoginForm/loginform.scss";

const LoginForm = () => {
    const navigate = useNavigate();
    const [loginValue, setLoginValue] = useState({
        username: "",
        password: "",
    });
    const { username, password } = loginValue;

    const handleOnChange = (e, name) => {
        const { value } = e.target;
        console.log(name, value);
        setLoginValue({ ...loginValue, [name]: value });
    };

    //state variable ändern

    const handleError = (err) =>
        toast.error(err, {
            position: "bottom-left",
        });
    const handleSuccess = (msg) =>
        toast.success(msg, {
            position: "bottom-left",
        });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(
                "http://localhost:4000/users/login",
                {
                    username,
                    password,
                },
                { withCredentials: true }
            );
            console.log(data);
            const { success, message } = data;
            if (success) {
                handleSuccess(message);
                setTimeout(() => {
                    navigate("/users/profile");
                }, 1000);
            } else {
                handleError(message);
            }
        } catch (error) {
            console.log(error);
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
                className='formInput'
                value={username}
                required
                onChange={(e) => handleOnChange(e, "username")}
            />
            <label htmlFor='password'></label>
            <input
                placeholder='Password'
                type='password'
                id='password'
                className='formInput'
                value={password}
                required
                onChange={(e) => handleOnChange(e, "password")}
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
