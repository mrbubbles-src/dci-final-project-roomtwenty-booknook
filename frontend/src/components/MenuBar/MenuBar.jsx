import React from "react";
import { NavLink } from "react-router-dom";
import "./MenuBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMagnifyingGlass,
    faUser,
    faCalendarDays,
    faBook,
} from "@fortawesome/free-solid-svg-icons";

const MenuBar = () => {
    return (
        <>
            <div className="menubar-container">
                <NavLink className="nav" to="/#">
                    {<FontAwesomeIcon icon={faCalendarDays} />}
                </NavLink>
                <NavLink className="nav" to="/#">
                    {<FontAwesomeIcon icon={faMagnifyingGlass} />}
                </NavLink>
                <NavLink className="nav" to="/#">
                    {<FontAwesomeIcon icon={faUser} />}
                </NavLink>
                <NavLink className="nav" to="/#">
                    {<FontAwesomeIcon icon={faBook} />}
                </NavLink>
            </div>
        </>
    );
};

export default MenuBar;
