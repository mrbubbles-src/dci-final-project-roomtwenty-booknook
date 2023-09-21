import { BookNookContext } from "../../context/BookNookProvider";
import "./LeseChallenge.scss";
import React, { useContext, useRef, useState } from "react";

const LeseChallenge = () => {
    const backEndUrl = import.meta.env.VITE_BACKEND_URL;
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
            const response = await fetch(`${backEndUrl}/users/updateUser`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(body),
            });
            const responsemsg = await response.json();
            // console.log(responsemsg);
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
                <strong>
                    Du möchtest{" "}
                    <span className="lese-challenge-number">{readingGoal}</span>{" "}
                    Bücher dieses Jahr lesen.
                </strong>
            </p>
            <aside className="lese-challenge-input-container">
                <input
                    className="lese-challenge-input-container-input no-spinner"
                    type="number"
                    ref={inputElement}
                    placeholder="Du willst mehr lesen?"
                />
                <button
                    className="lese-challenge-input-container-submit"
                    type="submit"
                    onClick={handleUpdatedReadingGoal}
                >
                    <strong>Aktualisieren</strong>
                </button>
            </aside>
        </div>
    );
};
export default LeseChallenge;
