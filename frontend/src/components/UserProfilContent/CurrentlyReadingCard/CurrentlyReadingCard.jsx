import React, { useState } from "react";
import "./CurrentlyReadingCard";
const CurrentlyReadingCard = ({ goal }) => {
    const [totalPages, setTotalPages] = useState(334);
    const [currentBookProgress, setCurrentBookProgress] = useState(210);
    const [currentBook, setCurrentBook] = useState("");
    const [booksRead, setBooksRead] = useState(0);

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
    return (
        <>
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

                {/* <input
                type="number"
                value={currentBookProgress}
                onChange={(e) => updateBookProgress(e.target.value)}
            /> */}
                <p>Gelesene Bücher: {booksRead}</p>
                <button onClick={addBook}>Buch gelesen</button>
            </div>
        </>
    );
};
export default CurrentlyReadingCard;
//Hier kommt der Lesefortschritt mit dem modal rein irgendwie, du machts das schon
