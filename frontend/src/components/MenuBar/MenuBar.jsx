import React, { useContext } from "react";
import { BookNookContext } from "../../context/BookNookProvider";
import { NavLink } from "react-router-dom";
import "./MenuBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMagnifyingGlass,
    faUser,
    faCalendarDays,
    faBook,
    faGear,
} from "@fortawesome/free-solid-svg-icons";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MenuBar = () => {
    const { isLoggedIn } = useContext(BookNookContext);
    const toolTipText = "Diese Funktion ist derzeitig in der Entwicklung";
    const handleIconClick = () => {
        toast.info(toolTipText, { autoClose: 2000 });
    };

    return (
        <div className='menubar'>
            {isLoggedIn && (
                <>
                    <div className='menu-item inactive effect'>
                        <div className='menu-item-icon'>
                            {" "}
                            <FontAwesomeIcon icon={faCalendarDays} />
                        </div>
                        <div className='menu-item-text'>Calendar</div>
                    </div>
                    <div className='menu-item inactive effect'>
                        <div className='menu-item-icon'>
                            {" "}
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </div>
                        <div className='menu-item-text'>Search</div>
                    </div>
                    <div className='menu-item active effect'>
                        <div className='menu-item-icon'>
                            {" "}
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                        <div className='menu-item-text'>Profile</div>
                    </div>
                    <div className='menu-item inactive effect'>
                        <div className='menu-item-icon'>
                            {" "}
                            <FontAwesomeIcon icon={faBook} />
                        </div>
                        <div className='menu-item-text'>Books</div>
                    </div>
                    <div className='menu-item inactive effect'>
                        <div className='menu-item-icon'>
                            {" "}
                            <FontAwesomeIcon icon={faGear} />
                        </div>
                        <div className='menu-item-text'>Settings</div>
                    </div>
                </>
            )}
            <ToastContainer position='top-right' autoClose={2000} />
        </div>
    );
};

export default MenuBar;
