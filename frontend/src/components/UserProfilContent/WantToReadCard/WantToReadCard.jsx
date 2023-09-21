import React from "react";
import ThumbnailSlider from "../../Carousel/ThumbnailSlider";

const WantToReadCard = ({ wantToRead }) => {
    return wantToRead.length !== 0 ? (
        <ThumbnailSlider slides={wantToRead} />
    ) : (
        <p className="no-slides">
            <strong>Du hast noch keine Bücher auf dieser Liste</strong>
        </p>
    );
};

export default WantToReadCard;
