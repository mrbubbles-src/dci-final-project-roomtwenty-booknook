import { BookNookContext } from "../../context/BookNookProvider";
import "./LeseChallenge.scss";
import React, { useContext, useState } from "react";

const LeseChallenge = () => {
    const { readingGoal, setReadingGoal } = useContext(BookNookContext);
    const [newReadingGoal, setNewReadingGoal] = useState(null);
    console.log(readingGoal);
    function handleUpdatedReadingGoal(e) {
        e.preventDefault();
        setReadingGoal(newReadingGoal);
    }
    return (
        <div className="lese-challenge">
            <h2 className="lese-challenge-title">Jahres-Lese-Challenge</h2>
            <p className="lese-challenge-ziel-text">
                Du möchtest{" "}
                <span className="lese-challenge-number">{readingGoal}</span>{" "}
                Bücher dieses Jahr lesen.
            </p>
            <input
                type="number"
                value={newReadingGoal}
                onChange={(e) => setNewReadingGoal(e.target.value)}
            />
            <button type="submit" onClick={handleUpdatedReadingGoal}>
                Aktualisieren
            </button>
        </div>
    );
};
export default LeseChallenge;
