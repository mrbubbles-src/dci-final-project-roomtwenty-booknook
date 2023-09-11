import React, { useState } from "react";
import "./ReadCard.scss";
import ThumbnailSlider from "../../Carousel/ThumbnailSlider";

const ReadCard = ({ alreadyRead }) => {
    return <ThumbnailSlider slides={alreadyRead} />;
};
export default ReadCard;
