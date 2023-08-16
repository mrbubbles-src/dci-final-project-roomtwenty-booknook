import React from "react";
import "./navbar.scss";

const Navbar = () => {
    return (
        <nav className='navbar-container'>
            <div className='logo-container'>
                <p>bookNook</p>{" "}
            </div>
            <div className='btn-container'>
                <button className='btn-login'>Login</button>
            </div>
        </nav>
    );
};

export default Navbar;
