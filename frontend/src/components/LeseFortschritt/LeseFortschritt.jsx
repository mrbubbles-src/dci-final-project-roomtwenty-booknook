import React, { useState } from "react";
import "./LeseFortschritt.scss";

const LeseFortschritt = ({ goal }) => {
    const [booksRead, setBooksRead] = useState(0);
    const [currentBook, setCurrentBook] = useState("");
    const [currentBookProgress, setCurrentBookProgress] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const updateBookProgress = (progress) => {
        if (progress >= 0 && 100) {
            setCurrentBookProgress(progress);
        }
    };
    // zum Hinzufügen eines gelesenen Buchs
    const addBook = () => {
        if (booksRead < goal) {
            setBooksRead(booksRead + 1);
            setCurrentBookProgress(0);
        }
    };

    // Berechnung des Lesefortschritts in Prozent
    const calculateProgressPercentage = () => {
        if (totalPages > 0) {
            return (currentBookProgress / totalPages) * 100;
        }
        return 0;
    };

    return (
        <div className="lese-fortschritt">
            <div className="user-profile profile-card-container">
                <div className="profile-img"></div>
                <div className="text-right">
                    <div
                        className="progress-bar"
                        style={{ width: `${calculateProgressPercentage()}%` }}
                    ></div>
                    <p className="bücher-gelesen">
                        <span>20</span> Bücher gelesen.
                    </p>
                    <p className="challenges">
                        <span>5</span> Challenges gewonnen.
                    </p>
                    <p className="freundes-liste">
                        <span>15</span> Freunde
                    </p>
                </div>
            </div>
            <p className="reading-now">Liest derzeit {currentBook}</p>
            <div className="Fortschritt profile-card-container">
                <div className="img-container"></div>
                <div className="information-container">
                    <p>
                        Fortschritt: 20
                        {calculateProgressPercentage().toFixed(2)}%
                    </p>
                    <p>
                        Aktuelle Seite: <span>120</span>
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
