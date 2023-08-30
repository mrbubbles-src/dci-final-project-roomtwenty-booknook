import { useState, useEffect } from "react";
import Cookies from "js-cookie";

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

    return { isLoggedIn, login, logout };
};

export default useAuth;
