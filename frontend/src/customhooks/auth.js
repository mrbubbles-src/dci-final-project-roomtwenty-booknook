import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";

const useAuth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = Cookies.get("jwtToken");
        setIsLoggedIn(!!token);
    }, []);
    // Login \\
    const login = async (userData) => {
        try {
            const response = await axios.post(
                "https://roomtwenty-booknook-backend.onrender.com/users/login",
                userData,
                { withCredentials: true }
            );

            const loggedInUser = response.data;

            if (loggedInUser.securityToken) {
                Cookies.set("jwtToken", loggedInUser.securityToken, {
                    expires: 7,
                });
                setIsLoggedIn(true);
                window.location.reload();
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.error("Error:", error);
            return false;
        }
    };
    // Logout \\
    const logout = () => {
        Cookies.remove("jwtToken");
        setIsLoggedIn(false);
        window.location.reload();
    };
    // Register \\
    const register = async (userData) => {
        try {
            const response = await axios.post(
                "https://roomtwenty-booknook-backend.onrender.com/users/signup",
                userData,
                { withCredentials: true }
            );

            const registeredUser = response.data;

            if (registeredUser) {
                login(userData);
                setIsLoggedIn(true);
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.error("Error:", error);
            return false;
        }
    };

    return { isLoggedIn, login, logout, register };
};

export default useAuth;
