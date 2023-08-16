import React from "react";
import heroPic from "../../assets/pics/heroBook.png";
import "./herosection.scss";

const Herosection = () => {
    return (
        <>
            <img className='logo' src={heroPic} alt='This is an image.' />
        </>
    );
};

export default Herosection;
