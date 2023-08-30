import React from "react";
import "./Kontaktformular.scss";
import Link from "react-router-dom";

import BuchNichtVorhanden from "../Themenauswahl/BuchNichtVorhanden";
import Fragen from "../Themenauswahl/Fragen";
import Anregungen from "./Themenauswahl/Anregungen";
import Irgendwas from "../Themenauswahl/Irgendwas";
import NochIrgendwas from "../Themenauswahl/NochIrgendwas";

const Kontaktformular = ({ children }) => {
    return (
        <div>
            <select name={"Themenauswahl"} size={"5"}>
                <option>
                    <Link to={"../Themenauswahl/BuchNichtVorhanden"}>
                        Buch nicht vorhanden?
                    </Link>
                </option>
                <option>
                    <Link to={"../Themenauswahl/Fragen"}>Fragen?</Link>
                </option>
                <option>
                    <Link to={"../Themenauswahl/Anregungen"}>Anregungen</Link>
                </option>
                <option>
                    <Link to={"../Themenauswahl/Irgendwas"}>Irgendwas</Link>
                </option>
                <option>
                    <Link to={"../Themenauswahl/NochIrgendwas"}>
                        Noch Irgendwas
                    </Link>
                </option>
            </select>
            {children}
        </div>
    );
};

export default Kontaktformular;
