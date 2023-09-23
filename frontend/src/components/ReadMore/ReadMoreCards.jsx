import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ReadMoreCards = ({ children, singlePageID }) => {
    const text = children;
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            const newWindowSize = {
                width: window.innerWidth,
                height: window.innerHeight,
            };
            setWindowSize(newWindowSize);
        };
        window.addEventListener("resize", handleResize);

        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    let displayText;
    if (windowSize.width <= 768) {
        displayText = text.slice(0, 90); // mobile
    } else if (windowSize.width <= 1024) {
        displayText = text.slice(0, 120); // tablet
    } else {
        displayText = text.slice(0, 400); // desktop
    }

    return (
        <>
            {displayText}
            <Link to={`/buch/${singlePageID}`} className="read-or-hide">
                <strong>"...mehr lesen"</strong>
            </Link>
        </>
    );
};

export default ReadMoreCards;
