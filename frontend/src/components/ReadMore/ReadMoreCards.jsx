import React, { useState } from "react";
import { Link } from "react-router-dom";

const ReadMoreCards = ({ children, singlePageID }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    // const toggleReadMore = () => {
    //     setIsReadMore(!isReadMore);
    // };
    return (
        <>
            {isReadMore ? text.slice(0, 100) : text}
            <Link to={`/buch/${singlePageID}`} className="read-or-hide">
                <strong>
                    {isReadMore ? "...mehr lesen" : "...weniger lesen"}
                </strong>
            </Link>
        </>
    );
};

export default ReadMoreCards;
