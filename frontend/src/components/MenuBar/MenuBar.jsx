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
        <div className='menubar-container'>
            <NavLink
                className='nav'
                to='/#'
                onClick={() => handleIconClick(`${toolTipText}`)}
            >
                {<FontAwesomeIcon icon={faCalendarDays} />}
            </NavLink>
            <NavLink className='nav' to='suche'>
                {<FontAwesomeIcon icon={faMagnifyingGlass} />}
            </NavLink>
            {isLoggedIn && (
                <>
                    <NavLink className='nav' to='/#'>
                        {<FontAwesomeIcon icon={faUser} />}
                    </NavLink>
                    <NavLink
                        className='nav'
                        to='/#'
                        onClick={() => handleIconClick(`${toolTipText}`)}
                    >
                        {<FontAwesomeIcon icon={faBook} />}
                    </NavLink>
                    <NavLink
                        className='nav'
                        to='/#'
                        onClick={() => handleIconClick(`${toolTipText}`)}
                    >
                        {<FontAwesomeIcon icon={faGear} />}
                    </NavLink>
                </>
            )}
            <ToastContainer position='top-right' autoClose={2000} />
        </div>
    );
};

export default MenuBar;
