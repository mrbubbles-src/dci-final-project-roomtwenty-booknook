import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import userstatistic from "./userstatistic.scss";

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
const UserStatistic = () => {
    const [readListData, setReadListData] = useState(null);

    useEffect(() => {
        const token = Cookies.get("jwtToken");
        if (token) {
            axios
                .get("http://localhost:3000/users/getReadlist", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                .then((response) => {
                    const readListData = response.data;
                    setReadListData(readListData);
                    // console.log(readListData);
                    // console.log(readListData.profilePicture);
                })
                .catch((error) => {
                    console.error("Something went wrong?!", error);
                });
        }
    }, []);

    if (!readListData) {
        return <div>Lade...</div>;
    }
    const serverURL = "http://localhost:3000";
    const Avatar = `${serverURL}${readListData.profilePicture}`;
    return (
        <div>
            <h1>{readListData.title}</h1>
            <p>
                {getPluralText(
                    readListData.alreadyRead.length,
                    "bereits gelesenes Buch",
                    "bereits gelesene Bücher"
                )}
            </p>
            <p>
                {getPluralText(
                    readListData.currentlyReading.length,
                    "aktuell lesendes Buch",
                    "aktuell lesende Bücher"
                )}
            </p>
            <p>
                {getPluralText(
                    readListData.wantToRead.length,
                    "gewünschtes Buch",
                    "gewünschte Bücher"
                )}
            </p>
            <img src={Avatar} alt="avatar" width={"100px"} />
        </div>
    );
};

export default UserStatistic;
