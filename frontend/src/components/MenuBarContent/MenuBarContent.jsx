import React from "react";
import "./menubarcontent.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMagnifyingGlass,
    faUser,
    faCalendarDays,
    faBook,
    faGear,
} from "@fortawesome/free-solid-svg-icons";

const MenuBarContent = () => {
    return (
        <div>
            <div className='extra'>
            <div>
                    {" "}
                    <FontAwesomeIcon
                        className='menu-icon'
                        icon={faCalendarDays}
                    />
                </div>                <div>
                    {" "}
                    <FontAwesomeIcon
                        className='menu-icon'
                        icon={faCalendarDays}
                    />
                </div>                <div>
                    {" "}
                    <FontAwesomeIcon
                        className='menu-icon'
                        icon={faCalendarDays}
                    />
                </div>                <div>
                    {" "}
                    <FontAwesomeIcon
                        className='menu-icon'
                        icon={faCalendarDays}
                    />
                </div>                <div>
                    {" "}
                    <FontAwesomeIcon
                        className='menu-icon'
                        icon={faCalendarDays}
                    />
                </div>
            </div>
        </div>
    );
};

export default MenuBarContent;
