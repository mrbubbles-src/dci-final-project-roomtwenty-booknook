import React, { useState } from "react";

const ReadMoreSpans = ({ children }) => {
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    const limit = 5;
    const childrenArray = React.Children.toArray(children);
    const childrenToShow = isReadMore
        ? childrenArray.slice(0, limit)
        : childrenArray;

    return (
        <>
            {childrenToShow}
            {childrenArray.length > limit && (
                <span onClick={toggleReadMore} className="read-or-hide-spans">
                    <strong>
                        {isReadMore ? "...mehr genres" : "...weniger genres"}
                    </strong>
                </span>
            )}
        </>
    );
};

export default ReadMoreSpans;
