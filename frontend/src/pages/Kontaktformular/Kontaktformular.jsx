import React from "react";
import "./Kontaktformular.scss";

import BuchNichtVorhanden from "./Themenauswahl/BuchNichtVorhanden";
import Fragen from "./Themenauswahl/Fragen";
import Anregungen from "./Themenauswahl/Anregungen";
import Irgendwas from "./Themenauswahl/Irgendwas";
import NochIrgendwas from "./Themenauswahl/NochIrgendwas";

const Kontaktformular = () => {
    return (
        <div>
            <div>
                <select name={"Themenauswahl"} size={"5"}>
                    <option value={BuchNichtVorhanden}>
                        Buch nicht vorhanden?
                    </option>
                    <option value={Fragen}>Fragen</option>
                    <option value={Anregungen}>Anregungen</option>
                    <option value={Irgendwas}>Irgendwas</option>
                    <option value={NochIrgendwas}>Noch Irgendwas</option>
                </select>
            </div>
        </div>
    );
};

export default Kontaktformular;
