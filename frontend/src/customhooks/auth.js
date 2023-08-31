import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";

const useAuth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = Cookies.get("jwtToken");
        setIsLoggedIn(!!token);
    }, []);

    const login = (token) => {
        Cookies.set("jwtToken", token, { expires: 7 });
        setIsLoggedIn(true);
    };

    const logout = () => {
        Cookies.remove("jwtToken");
        setIsLoggedIn(false);
    };

    const register = async (userData) => {
        try {
            const response = await axios.post(
                "http://localhost:3000/users/signup",
                userData,
                { withCredentials: true }
            );

            const registeredUser = response.data;

            if (registeredUser) {
                login(registeredUser.securityToken);
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
