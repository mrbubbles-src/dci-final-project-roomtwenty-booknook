import React, { useState } from "react";
import "./Kontaktformular.scss";
import { Link } from "react-router-dom";

import BuchNichtVorhanden from "./Themenauswahl/BuchNichtVorhanden";
import Anregungen from "./Themenauswahl/Anregungen";
import Feedback from "./Themenauswahl/Feedback";

// import Irgendwas from "./Themenauswahl/Irgendwas";
// import NochIrgendwas from "./Themenauswahl/NochIrgendwas";

const Kontaktformular = () => {
    const [selectedOption, setSelectedOption] = useState("Feedback");

    const handleSelectChange = (event) => {
        console.log("DAAA:" + event.target.value);
        setSelectedOption(event.target.value);
    };
    return (
        <div>
            <select
                name="Themenauswahl"
                onChange={handleSelectChange}
                value={selectedOption}
            >
                <option value="Feedback">Deine meinung ist uns wichtig!</option>
                <option value="BuchNichtVorhanden">Buch not availabe?</option>
                <option value="Anregungen">Anregung</option>
            </select>
            {selectedOption === "BuchNichtVorhanden" ? (
                <BuchNichtVorhanden />
            ) : (
                ""
            )}
            {selectedOption === "Anregungen" ? <Anregungen /> : null}
            {selectedOption === "Feedback" ? <Feedback /> : null}
        </div>
    );
};

export default Kontaktformular;
