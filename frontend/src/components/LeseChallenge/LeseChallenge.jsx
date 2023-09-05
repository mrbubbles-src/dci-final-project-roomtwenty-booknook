import "./LeseChallenge.scss";
import LeseFortschritt from "../LeseFortschritt/LeseFortschritt.jsx";
import React, { useState, useEffect } from "react";

const LeseChallenge = () => {
    const [goal, setGoal] = useState(0); // das Leseziel hier einsetzen

    const [currentMonth, setCurrentMonth] = useState(1); // Aktueller Monat

    const handleGoalChange = (e) => {
        const value = e.target.value;
        setGoal(value);
        localStorage.setItem("goal", value);
    };

    useEffect(() => {
        const _goal = localStorage.getItem("goal");
        if (_goal) {
            setGoal(_goal);
        }
    }, []);

    // einstellen der Monate
    const nextMonth = () => {
        if (currentMonth < 12) {
            setCurrentMonth(currentMonth + 1);
        }
    };

    return (
        <div className="profile-challenge">
            <h2 className="ueberschrift">Lese-Challenge: Bücher pro Jahr</h2>
            <p className="ziele">Dein Ziel: {goal} Bücher pro Jahr</p>
            <input
                type="number"
                value={goal}
                onChange={(e) => handleGoalChange(e)}
            />
            <LeseFortschritt goal={goal} />
            {/* <p>Aktueller Monat: {currentMonth}</p> */}

            {/* <button onClick={nextMonth}>Nächster Monat</button> */}
        </div>
    );
};

export default LeseChallenge;
