import React, { useContext, useState } from "react";
import { BookNookContext } from "../../context/BookNookProvider";
import { NavLink } from "react-router-dom";
import "./MenuBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMagnifyingGlass,
    faUser,
    faCompass,
    faBars,
    faBook,
} from "@fortawesome/free-solid-svg-icons";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MenuBar = () => {
    const { isLoggedIn } = useContext(BookNookContext);
    const [isContentActive, setIsContentActive] = useState(false);

    const toolTipText = "Diese Funktion ist derzeitig in der Entwicklung";

    const handleIconClick = () => {
        toast.info(toolTipText, { autoClose: 2000 });
    };

    const handleExtraContentClick = (e) => {
        e.preventDefault();
        setIsContentActive(!isContentActive);
    };

    return (
        <div className={"menu-main-container"}>
            {isLoggedIn && (
                <div className='menu-second-container'>
                    {" "}
                    <div
                        className={`menu ${
                            isContentActive ? "menu-expanded" : ""
                        }`}
                    >
                        {/* DEAD BUTTON */}
                        <NavLink to='/#' onClick={() => handleIconClick()}>
                            <div className='menu-item'>
                                <div className='menu-item-icon'>
                                    <FontAwesomeIcon
                                        className='menu-icon'
                                        icon={faCompass}
                                    />
                                </div>
                            </div>
                        </NavLink>
                        {/* SEARCH */}
                        <NavLink to='suche'>
                            <div className='menu-item'>
                                <div className='menu-item-icon'>
                                    <FontAwesomeIcon
                                        className='menu-icon'
                                        icon={faMagnifyingGlass}
                                    />
                                </div>
                            </div>
                        </NavLink>
                        {/* USER */}
                        <NavLink to='/#'>
                            <div className='menu-item'>
                                <div className='menu-item-icon'>
                                    <FontAwesomeIcon
                                        className='menu-icon'
                                        icon={faUser}
                                    />
                                </div>
                            </div>
                        </NavLink>{" "}
                        <NavLink to='/#' onClick={() => handleIconClick()}>
                            <div className='menu-item'>
                                <div className='menu-item-icon'>
                                    <FontAwesomeIcon
                                        className='menu-icon'
                                        icon={faBook}
                                    />
                                </div>
                            </div>
                        </NavLink>
                        <NavLink to='/#' onClick={handleExtraContentClick}>
                            <div className='menu-item'>
                                <div className='menu-item-icon'>
                                    <FontAwesomeIcon
                                        className='menu-icon'
                                        icon={faBars}
                                    />
                                </div>
                            </div>
                        </NavLink>
                        {isContentActive && (
                            <div className='menu-item-footer'>
                                <NavLink
                                    to={"./About"}
                                    className='footer-links'
                                >
                                    Über Uns
                                </NavLink>
                                <NavLink
                                    to={"./Impressum"}
                                    className='footer-links'
                                >
                                    Impressum
                                </NavLink>
                                <NavLink
                                    to={"./Datenschutz"}
                                    className='footer-links'
                                >
                                    Datenschutz
                                </NavLink>
                                <NavLink to={"#"} className='footer-links'>
                                    Kontakt
                                </NavLink>
                            </div>
                        )}
                    </div>{" "}
                </div>
            )}
            <ToastContainer position='top-right' autoClose={2000} />
        </div>
    );
};

export default MenuBar;
