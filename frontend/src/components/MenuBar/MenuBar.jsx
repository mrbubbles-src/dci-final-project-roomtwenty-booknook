import React, { useContext, useState } from "react";
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
import MenuBarContent from "../MenuBarContent/MenuBarContent";

const MenuBar = () => {
    const { isLoggedIn } = useContext(BookNookContext);
    const [showContent, setShowContent] = useState(false);
    const toolTipText = "Diese Funktion ist derzeitig in der Entwicklung";
    const handleIconClick = () => {
        toast.info(toolTipText, { autoClose: 2000 });
    };

    const handleExtraContentClick = () => {
        setShowContent(!showContent);
    };

    return (
        <div>
            {isLoggedIn && (
                <div className='menu'>
                    {/* DEAD BUTTON */}
                    <NavLink to='/#' onClick={() => handleIconClick()}>
                        <div className='menu-item'>
                            <div className='menu-item-icon'>
                                <FontAwesomeIcon
                                    className='menu-icon'
                                    icon={faCalendarDays}
                                />
                            </div>
                        </div>
                    </NavLink>
                    {/* SEARCH */}
                    <NavLink to='suche'>
                        <div className='menu-item active'>
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
                    </NavLink>
                    {/* DEAD BUTTON */}
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
                    {/* DEAD BUTTON */}
                    <NavLink to='/#' onClick={handleExtraContentClick}>
                        <div className='menu-item'>
                            <div className='menu-item-icon'>
                                <FontAwesomeIcon
                                    className='menu-icon'
                                    icon={faGear}
                                />
                            </div>
                        </div>
                    </NavLink>
                </div>
            )}
            <ToastContainer position='top-right' autoClose={2000} />
            {showContent ? <MenuBarContent /> : ""}
        </div>
    );
};

export default MenuBar;
