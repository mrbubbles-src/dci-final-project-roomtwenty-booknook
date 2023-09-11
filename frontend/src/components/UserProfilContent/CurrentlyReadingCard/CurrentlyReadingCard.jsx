import React, { useState } from "react";
import "./CurrentlyReadingCard";
import Slider from "../../Carousel/Slider";
const CurrentlyReadingCard = ({ currentlyReading }) => {
    return <Slider slides={currentlyReading} />

};
export default CurrentlyReadingCard;
