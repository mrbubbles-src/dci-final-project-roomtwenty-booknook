import React, { useState } from "react";
// import "./ReadCard.scss";
import ThumbnailSlider from "../../Carousel/ThumbnailSlider";
import "../../Carousel/carousel.scss";

const ReadCard = ({ alreadyRead }) => {
    return alreadyRead.length !== 0 ? (
        <ThumbnailSlider slides={alreadyRead} />
    ) : (
        <p>Du hast noch keine Bücher auf dieser Liste</p>
    );
};
export default ReadCard;
