import { BookNookContext } from "../../context/BookNookProvider";
import "./LeseChallenge.scss";
import React, { useContext, useRef, useState } from "react";

const LeseChallenge = () => {
    const {
        token,
        readingGoal,
        setReadingGoal,
        readingGoalProgress,
        setReadingGoalProgress,
    } = useContext(BookNookContext);
    const inputElement = useRef();
    async function handleUpdateReadingGoalFetch() {
        const body = {
            readingChallengeMax: parseInt(inputElement.current.value),
        };
        try {
            const response = await fetch(
                "http://localhost:3000/users/updateUser",
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify(body),
                }
            );
            const responsemsg = await response.json();
            console.log(responsemsg);
        } catch (error) {
            throw new Error(error);
        }
    }
    function handleUpdatedReadingGoal(e) {
        e.preventDefault();
        setReadingGoal(parseInt(inputElement.current.value));
        handleUpdateReadingGoalFetch();
    }
    return (
        <div className="lese-challenge">
            <h2 className="lese-challenge-title">Jahres-Lese-Challenge</h2>
            <p className="lese-challenge-ziel-text">
                Du möchtest{" "}
                <span className="lese-challenge-number">{readingGoal}</span>{" "}
                Bücher dieses Jahr lesen.
            </p>
            <input type="number" ref={inputElement} />
            <button type="submit" onClick={handleUpdatedReadingGoal}>
                Aktualisieren
            </button>
        </div>
    );
};
export default LeseChallenge;
