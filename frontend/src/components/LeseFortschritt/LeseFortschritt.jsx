import React, { useState, useEffect } from "react";
import "./LeseFortschritt.scss";
import LevelExpBar from "../LevelExpBar/LevelExpBar";

const LeseFortschritt = ({ goal }) => {
    const [booksRead, setBooksRead] = useState(0);
    const [currentBook, setCurrentBook] = useState("");
    const [currentBookProgress, setCurrentBookProgress] = useState(210);
    const [totalPages, setTotalPages] = useState(334);
    const [alreadyReadBooksList, setAlreadyReadBooksList] = useState([]);

    // schema integrieren für den user,
    // route bauen um die daten ans backend zu schicken
    const fetchAlreadyReadBooks = async () => {
        try {
            const response = await fetch("http://localhost:3000/");
            const data = await response.json();
            setAlreadyReadBooksList(data);
        } catch (error) {
            console.error("Fehler beim Abrufen der gelesenen Bücher:", error);
        }
    };

    // eine neue eigenschaft im backend (DB) für alle seiten die bis jetzt gelesen wurde.
    // frontend: die neue seiten müssen aktualisiert werden und ins backend geschickt.
    // frontend: darstellung

    // Initialisieren des Aufrufs.
    useEffect(() => {
        // fetchAlreadyReadBooks();
    }, []);

    const updateBookProgress = (progress) => {
        if (progress >= 0 && 100) {
            setCurrentBookProgress(progress);
        }
    };

    // Bücher die man schon fertig gelesen hat
    // const alreadyReadBooks = () => {};

    // Bücher die man noch lesen möchte aus der Liste
    // const wantToReadBooks = () => {};

    // zum Hinzufügen eines gelesenen Buchs
    const addBook = () => {
        if (booksRead < goal) {
            setBooksRead(booksRead + 1);
            setCurrentBookProgress(0);
        }
    };

    // Berechnung des Lesefortschritts in Prozent
    const calculateProgressPercentage = (seitenZahl, readingProgress) => {
        if (seitenZahl > 0) {
            return ((readingProgress / seitenZahl) * 100).toFixed(1);
        }
        return 0;
    };

    // funktion für die berechnung der insgesamt gelesenen seiten

    // const allReadedPages = () => {
    //     if()
    // };

    return (
        <div className="lese-fortschritt">
            <div className="user-profile profile-card-container">
                <div className="profile-img"></div>
                <div className="text-right">
                    <LevelExpBar xpProzent={90} />
                    <div className="usercard-info-container d">
                        <p className="bücher-gelesen text-info">
                            <span className="number">20</span> Bücher gelesen.
                        </p>
                        <p className="challenges text-info">
                            <span className="number">5</span> Challenges
                            gewonnen.
                        </p>
                        {/* <p className="freundes-liste text-info ">
                            <span className="number">15</span> Freunde
                        </p> */}
                    </div>
                </div>
            </div>
            <p className="reading-now">Liest derzeit {currentBook}</p>
            <div className="fortschritt profile-card-container">
                <div className="img-container"></div>
                <div className="information-container">
                    <div
                        className="progress-bar"
                        style={{
                            width: `${calculateProgressPercentage(
                                totalPages,
                                currentBookProgress
                            )}%`,
                        }}
                    >
                        {calculateProgressPercentage(
                            totalPages,
                            currentBookProgress
                        )}
                        %
                    </div>
                    <p className="seiten-gelesen">
                        Aktuelle Seite:{" "}
                        <span className="number">{currentBookProgress}</span>
                    </p>
                </div>
            </div>
            <p>Hat bereits gelesen</p>
            <div className="bereits-gelesen profile-card-container">
                <p>Hier kommen die Bücher rein</p>
            </div>

            <p>Möchte noch lesen</p>
            <div className="noch-lesen profile-card-container">
                <p>Hier kommen die Bücher rein </p>
            </div>

            {/* <input
                type="number"
                value={currentBookProgress}
                onChange={(e) => updateBookProgress(e.target.value)}
            /> */}
            <p>Gelesene Bücher: {booksRead}</p>
            <button onClick={addBook}>Buch gelesen</button>
        </div>
    );
};

export default LeseFortschritt;
