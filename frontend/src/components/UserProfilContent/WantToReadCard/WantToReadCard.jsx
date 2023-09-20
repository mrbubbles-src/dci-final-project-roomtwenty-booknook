import React from "react";
import ThumbnailSlider from "../../Carousel/ThumbnailSlider";

const WantToReadCard = ({ wantToRead }) => {
    return wantToRead.length !== 0 ? (
        <ThumbnailSlider slides={wantToRead} />
    ) : (
        <p>Du hast noch keine Bücher auf dieser Liste</p>
    );
};

export default WantToReadCard;
