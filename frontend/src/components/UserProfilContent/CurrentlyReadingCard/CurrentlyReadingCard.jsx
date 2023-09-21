import React, { useState } from "react";
import "./CurrentlyReadingCard";
import Slider from "../../Carousel/Slider";
const CurrentlyReadingCard = ({ currentlyReading }) => {
    return currentlyReading.length !== 0 ? (
        <Slider slides={currentlyReading} />
    ) : (
        <p className="no-slides">
            <strong>Du hast noch keine Bücher auf dieser Liste</strong>
        </p>
    );
};
export default CurrentlyReadingCard;
