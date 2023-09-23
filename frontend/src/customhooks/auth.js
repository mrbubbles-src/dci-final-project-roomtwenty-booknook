import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";

const useAuth = () => {
    const backEndUrl = import.meta.env.VITE_BACKEND_URL;
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = Cookies.get("jwtToken");
        setIsLoggedIn(!!token);
    }, []);
    // Login \\
    // const login = async (userData) => {
    //     // console.log("beURL", backEndUrl);
    //     try {
    //         const response = await axios.post(
    //             `${backEndUrl}/users/login`,
    //             userData,
    //             { withCredentials: true }
    //         );
    //         // console.log("res", response);
    //         const loggedInUser = response.data;

    //         if (loggedInUser.securityToken) {
    //             Cookies.set("jwtToken", loggedInUser.securityToken, {
    //                 expires: 7,
    //             });
    //             setIsLoggedIn(true);
    //             window.location.reload();
    //             return true;
    //         } else {
    //             return false;
    //         }
    //     } catch (error) {
    //         console.error("Error:", error);
    //         return false;
    //     }
    // };
    const login = async (userData) => {
        try {
            const response = await axios.post(
                `${backEndUrl}/users/login`,
                userData,
                { withCredentials: true }
            );
            // If login is successful, set the JWT token and update isLoggedIn state
            if (response.data.securityToken) {
                Cookies.set("jwtToken", response.data.securityToken, {
                    expires: 7,
                });
                setIsLoggedIn(true);
                window.location.reload();
                return { success: true };
            } else {
                return { success: false, error: "Login failed" };
            }
        } catch (error) {
            if (error.response && error.response.status === 422) {
                const errors = error.response.data.message.split(", ");
                return { success: false, error: errors.join(", ") };
            }
            return { success: false, error: "An unknown error occurred" };
        }
    };

    // Logout \\
    const logout = () => {
        Cookies.remove("jwtToken");
        setIsLoggedIn(false);
        window.location.reload();
    };
    // Register \\
    // const register = async (userData) => {
    //     try {
    //         const response = await axios.post(
    //             `${backEndUrl}/users/signup`,
    //             userData,
    //             { withCredentials: true }
    //         );

    //         const registeredUser = response.data;

    //         if (registeredUser) {
    //             login(userData);
    //             setIsLoggedIn(true);
    //             return true;
    //         } else {
    //             return false;
    //         }
    //     } catch (error) {
    //         console.error("Error:", error);
    //         return false;
    //     }
    // };
    // const register = async (userData) => {
    //     try {
    //         const response = await axios.post(
    //             `${backEndUrl}/users/signup`,
    //             userData,
    //             { withCredentials: true }
    //         );
    //         return { success: true };
    //     } catch (error) {
    //         if (error.response && error.response.status === 422) {
    //             const errors = error.response.data.message.split(", ");
    //             return { success: false, error: errors.join(", ") };
    //         }
    //         return { success: false, error: "An unknown error occurred" };
    //     }
    // };
    //
    const register = async (userData) => {
        try {
            const response = await axios.post(
                `${backEndUrl}/users/signup`,
                userData,
                { withCredentials: true }
            );
            if (response.data.registeredUser) {
                login(userData);
                setIsLoggedIn(true);
                return { success: true };
            } else {
                return { success: false, error: "Registration failed" };
            }
        } catch (error) {
            if (error.response && error.response.status === 422) {
                const errors = error.response.data.message.split(", ");
                return { success: false, error: errors.join(", ") };
            }
            return { success: false, error: "An unknown error occurred" };
        }
    };

    return { isLoggedIn, login, logout, register };
};

export default useAuth;
