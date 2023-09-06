import React, { useState, useEffect } from "react";
import "./LeseFortschritt.scss";
import UserInfoCard from "./UserInfoCard/UserInfoCard";
import CurrentlyReadingCard from "./CurrentlyReadingCard/CurrentlyReadingCard";
import ReadCard from "./ReadCard/ReadCard";
import WantToReadCard from "./WantToReadCard/WantToReadCard";

//wenn currently reading geupdatet wird, benutze modal und dann dadrin in der card die erscheint kommt, das man das buch auf fertig gelesen setzen kann und auch die anzeige bearbeiten kann: seite 343 von 643 gelesen
const LeseFortschritt = () => {
    return (
        <div className="lese-fortschritt">
            <UserInfoCard />
            <CurrentlyReadingCard />
            <ReadCard />
            <WantToReadCard />
        </div>
    );
};

export default LeseFortschritt;
