import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

function getPluralText(count, singularText, pluralText) {
    if (count === 1) {
        return `${count} ${singularText}`;
    } else if (count > 1) {
        return `${count} ${pluralText}`;
    } else {
        return `Kein ${singularText}`;
    }
}

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
                    console.log(readListData);
                })
                .catch((error) => {
                    console.error("Something went wrong?!", error);
                });
        }
    }, []);

    if (!readListData) {
        return <div>Lade...</div>;
    }

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
        </div>
    );
};

export default UserStatistic;
