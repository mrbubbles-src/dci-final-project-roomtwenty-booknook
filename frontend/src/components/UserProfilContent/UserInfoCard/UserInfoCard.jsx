import React, { useEffect, useState } from "react";
import "./UserInfoCard.scss";
import LevelExpBar from "../../LevelExpBar/LevelExpBar";

const UserInfoCard = ({ readingRank, alreadyRead }) => {
    const alreadyReadList = alreadyRead || [];
    const [currentLevel, setCurrentLevel] = useState(readingRank);
    const alreadyReadLength = alreadyReadList.length;

    // Berechne xpProzent basierend auf bereits gelesenen Büchern
    const xpProzent = (alreadyReadLength % 3) * 33.3;

    useEffect(() => {
        const checkBooksRead = () => {
            // Zum Aktualisieren der Exp-Bar
            experienceLevelBar(xpProzent);

            if (alreadyReadLength % 3 === 0) {
                // Wenn 3 Bücher gelesen wurden, erhöhe das Level
                setCurrentLevel((prevLevel) => prevLevel + 1);
                experienceLevelBar(0);
            } else if (alreadyReadLength % 3 === 1) {
                experienceLevelBar(33.3);
            } else if (alreadyReadLength % 3 === 2) {
                experienceLevelBar(66.6);
            }
        };
        checkBooksRead();
    }, [alreadyReadLength]);

    const experienceLevelBar = () => {
        // Hier kannst du die Logik für die Aktualisierung der Exp-Bar implementieren
        // Zum Beispiel, die XP-Prozente an LevelExpBar übergeben
    };

    return (
        <div className='user-profile profile-card-container'>
            <div className='profile-img'></div>
            <div className='text-right'>
                <LevelExpBar xpProzent={xpProzent} />{" "}
                <div className='usercard-info-container d'>
                    <p className='bücher-gelesen text-info'>
                        <span className='number'>{alreadyReadLength}</span>{" "}
                        Bücher gelesen.
                    </p>
                    <p className='challenges text-info'>
                        <span className='number'>{currentLevel}</span>{" "}
                        Challenges gewonnen.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default UserInfoCard;
