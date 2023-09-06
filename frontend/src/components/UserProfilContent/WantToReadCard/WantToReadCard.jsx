import React, { useState } from "react";
import "./WantToReadCard.scss";
const WantToReadCard = () => {
    const [wantToReadBooks, setWantToReadBooks] = useState([]);
    return (
        <>
            <p>Möchte noch lesen</p>
            <div className="noch-lesen profile-card-container">
                <p>Hier kommen die Bücher rein </p>
            </div>
        </>
    );
};
export default WantToReadCard;
