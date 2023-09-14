import React, { useState } from "react";

const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <>
            {isReadMore ? text.slice(0, 100) : text}
            <span onClick={toggleReadMore} className="read-or-hide">
                <strong>
                    {isReadMore ? "...mehr lesen" : "...weniger lesen"}
                </strong>
            </span>
        </>
    );
};

export default ReadMore;
