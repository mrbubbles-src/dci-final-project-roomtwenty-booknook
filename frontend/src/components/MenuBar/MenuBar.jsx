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
} from "@fortawesome/free-solid-svg-icons";

const MenuBar = () => {
    const { isLoggedIn } = useContext(BookNookContext);
    if (isLoggedIn) {
        return (
            <>
                <div className='menubar-container'>
                    <NavLink className='nav' to='/#'>
                        {<FontAwesomeIcon icon={faCalendarDays} />}
                    </NavLink>
                    <NavLink className='nav' to='suche'>
                        {<FontAwesomeIcon icon={faMagnifyingGlass} />}
                    </NavLink>
                    <NavLink className='nav' to='/#'>
                        {<FontAwesomeIcon icon={faUser} />}
                    </NavLink>
                    <NavLink className='nav' to='/#'>
                        {<FontAwesomeIcon icon={faBook} />}
                    </NavLink>
                </div>
            </>
        );
    }
};

export default MenuBar;
