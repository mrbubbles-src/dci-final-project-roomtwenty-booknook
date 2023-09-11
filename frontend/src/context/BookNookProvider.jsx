import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import useAuth from "../customhooks/auth";

export const BookNookContext = React.createContext();

const BookNookProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(null);
    const [token, setToken] = useState(null);
    const [readingGoal, setReadingGoal] = useState(null);
    const [readingGoalProgress, setReadingGoalProgress] = useState(null);
    const [currentPageProgress, setCurrentPageProgress] = useState(null);
    const [profileImageUploadPreview, setProfileImageUploadPreview] = useState({
        preview: "",
        raw: "",
        button: false,
    });
    const [searchTerm, setSearchTerm] = useState(null);
    const [bookData, setBookData] = useState({});
    const [searchReadMore, setsearchReadMore] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [isLoginVisible, setIsLoginVisible] = useState(true);
    const [isRead, setIsRead] = useState(false);

    useEffect(() => {
        if (searchTerm !== null) {
            async function fetchData() {
                setIsLoading(true);
                const res = await fetch(
                    `http://localhost:3000/books/searchbooks?q=${searchTerm}`
                );
                const data = await res.json();
                setBookData(data);
                setIsLoading(false);
                setsearchReadMore(true);
            }
            fetchData();
        }
    }, [searchTerm]);

    useEffect(() => {
        setToken(Cookies.get("jwtToken"));
        try {
            const tokenForLogin = Cookies.get("jwtToken");
            if (tokenForLogin) {
                return setIsLoggedIn(true);
            }
        } catch (error) {
            console.log(error);
        }
        // console.log("cookie.get", Cookies.get("gibts nicht"));
    }, []);
    const { logout } = useAuth();

    const toggleForm = () => {
        setIsLoginVisible(!isLoginVisible);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleLoginClick = () => {
        setShowModal(true);
    };

    const handleLogout = () => {
        logout();
        setIsLoggedIn(false);
    };
    return (
        <BookNookContext.Provider
            value={{
                searchTerm,
                setSearchTerm,
                bookData,
                searchReadMore,
                setsearchReadMore,
                isLoading,
                token,
                isLoggedIn,
                setIsLoggedIn,
                showModal,
                setShowModal,
                toggleForm,
                handleCloseModal,
                handleLoginClick,
                handleLogout,
                isLoginVisible,
                profileImageUploadPreview,
                setProfileImageUploadPreview,
                readingGoal,
                setReadingGoal,
                readingGoalProgress,
                setReadingGoalProgress,
                currentPageProgress,
                setCurrentPageProgress,
                isRead,
                setIsRead,
            }}
        >
            {children}
        </BookNookContext.Provider>
    );
};

export default BookNookProvider;
