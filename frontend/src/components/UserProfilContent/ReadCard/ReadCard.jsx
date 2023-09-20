import React from "react";
import ThumbnailSlider from "../../Carousel/ThumbnailSlider";

const ReadCard = ({ alreadyRead }) => {
    return alreadyRead.length !== 0 ? (
        <ThumbnailSlider slides={alreadyRead} />
    ) : (
        <p>Du hast noch keine Bücher auf dieser Liste</p>
    );
};
export default ReadCard;
