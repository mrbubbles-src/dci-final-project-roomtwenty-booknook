import React, { useState } from "react";
import "./WantToReadCard.scss";
const WantToReadCard = () => {
    const [wantToReadBooks, setWantToReadBooks] = useState([]);
    return (
        <>
            <div className="want-to-read-container">
                <p>Hier kommen die Bücher rein </p>
            </div>
        </>
    );
};
export default WantToReadCard;
