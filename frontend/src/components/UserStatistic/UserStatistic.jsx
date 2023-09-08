import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Cookies from "js-cookie";
import "./userstatistic.scss";

function getPluralText(count, singularText, pluralText) {
    if (count === 1) {
        return `${count} ${singularText}`;
    } else if (count > 1) {
        return `${count} ${pluralText}`;
    } else {
        return `Kein ${singularText}`;
    }
}
// nur /images/dateiname im backend abspeichern
const UserStatistic = ({
    wantToRead,
    currentlyReading,
    alreadyRead,
    username,
    profileImage,
}) => {
    return (
        <div>
            {/* <h1>{readListData.title}</h1> */}
            <p>
                {getPluralText(
                    alreadyRead.length,
                    "bereits gelesenes Buch",
                    "bereits gelesene Bücher"
                )}
            </p>
            <p>
                {getPluralText(
                    currentlyReading.length,
                    "aktuell lesendes Buch",
                    "aktuell lesende Bücher"
                )}
            </p>
            <p>
                {getPluralText(
                    wantToRead.length,
                    "gewünschtes Buch",
                    "gewünschte Bücher"
                )}
            </p>
            {/* <img src={Avatar} alt="avatar" width={"100px"} /> */}
        </div>
    );
};

export default UserStatistic;
