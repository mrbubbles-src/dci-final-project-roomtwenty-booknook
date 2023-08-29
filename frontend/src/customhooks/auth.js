import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const useAuth = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Überprüfe, ob der Token im Cookie vorhanden ist
        const token = Cookies.get("jwtToken");
        // Überprüfe ob token true oder false ist
        setIsLoggedIn(!!token);
    }, []);

    const login = (token) => {
        // Setze den Cookien
        Cookies.set("jwtToken", token, { expires: 7 });
        setIsLoggedIn(true);
        navigate("/users/profile");
    };

    const logout = () => {
        // Lösche den Cookie
        Cookies.remove("jwtToken");
        // setze den Status auf false
        setIsLoggedIn(false);
        // Navigiere zum root
        navigate("/");
    };

    return { isLoggedIn, login, logout };
};

export default useAuth;
