import React from "react";
import ThumbnailSlider from "../../Carousel/ThumbnailSlider";

const ReadCard = ({ alreadyRead }) => {
    return alreadyRead.length !== 0 ? (
        <ThumbnailSlider slides={alreadyRead} />
    ) : (
        <p className="no-slides">
            <strong>Du hast noch keine Bücher auf dieser Liste</strong>
        </p>
    );
};
export default ReadCard;
