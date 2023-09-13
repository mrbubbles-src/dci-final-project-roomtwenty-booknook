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
        <div className='menu'>
            {isLoggedIn && (
                <>
                    {" "}
                    {/* DEAD BUTTON */}
                    <NavLink
                        className='nav'
                        to='/#'
                        onClick={() =>
                            handleIconClick(
                                "Diese Funktion ist derzeitig in der Entwicklung"
                            )
                        }
                    >
                        <div className='menu-item inactive accent'>
                            <div className='menu-item-icon'>
                                {" "}
                                {
                                    <FontAwesomeIcon
                                        className='menu-icon'
                                        icon={faCalendarDays}
                                    />
                                }
                            </div>
                            <div className='menu-item-text'>Calendar</div>
                        </div>{" "}
                    </NavLink>{" "}
                    {/* SEARCH */}
                    <NavLink className='nav' to='suche'>
                        <div className='menu-item active'>
                            <div className='menu-item-icon'>
                                {" "}
                                {
                                    <FontAwesomeIcon
                                        className='menu-icon'
                                        icon={faMagnifyingGlass}
                                    />
                                }
                            </div>
                            <div className='menu-item-text'>Search</div>
                        </div>{" "}
                    </NavLink>{" "}
                    {/* USER */}
                    <NavLink to='/#'>
                        <div className='menu-item active'>
                            <div className='menu-item-icon'>
                                {" "}
                                {
                                    <FontAwesomeIcon
                                        className='menu-icon'
                                        icon={faUser}
                                    />
                                }
                            </div>
                            <div className='menu-item-text'>Profile</div>
                        </div>{" "}
                    </NavLink>{" "}
                    {/* DEAD BUTTON */}
                    <NavLink
                        className='nav'
                        to='/#'
                        onClick={() =>
                            handleIconClick("Bücher (In Entwicklung)")
                        }
                    >
                        <div className='menu-item'>
                            <div className='menu-item-icon'>
                                {" "}
                                {
                                    <FontAwesomeIcon
                                        className='menu-icon'
                                        icon={faBook}
                                    />
                                }
                            </div>
                            <div className='menu-item-text'>Books</div>
                        </div>{" "}
                    </NavLink>{" "}
                    {/* DEAD BUTTON */}
                    <NavLink
                        className='nav'
                        to='/#'
                        onClick={() =>
                            handleIconClick("Einstellungen (In Entwicklung)")
                        }
                    >
                        <div className='menu-item'>
                            <div className='menu-item-icon'>
                                {" "}
                                {
                                    <FontAwesomeIcon
                                        className='menu-icon'
                                        icon={faGear}
                                    />
                                }
                            </div>
                            <div className='menu-item-text'>Settings</div>
                        </div>{" "}
                    </NavLink>
                </>
            )}
            <ToastContainer position='top-right' autoClose={2000} />
        </div>
    );
};

export default MenuBar;
