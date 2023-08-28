import React from "react";

const BuchNichtVorhanden = () => {
    return (
        <div>
            <form id="Kontaktformular" method="post" action="submit">
                {" "}
                <div>
                    <h1>Buch nicht vorhanden?</h1>
                    <p>
                        Fülle die Eingabefelder für deine Suche aus und wir
                        melden uns bei dir.
                    </p>
                </div>
                <div className="Formfelderrahmen">
                    <label className="name eingabe">
                        Name{" "}
                        <input
                            type="text"
                            name="Kontaktname"
                            id="Kontaktname"
                            placeholder="Name"
                            required
                        />
                    </label>
                    <label className="email eingabe">
                        Email{" "}
                        <input
                            type="text"
                            name="Kontaktemail"
                            id="Kontaktemail"
                            placeholder="du@beispiel.de"
                            required
                        />
                    </label>
                    <div>
                        <label className="Buchtitel eingabe">
                            Buchtitel{" "}
                            <input
                                type="text"
                                name="Buchtitel"
                                id="Buchtitel"
                                placeholder="Buchtitel"
                                required
                            />
                        </label>
                        <label className="Autor eingabe">
                            Autor{" "}
                            <input
                                type="text"
                                name="Autor"
                                id="Autor"
                                placeholder="Autor"
                                required
                            />
                        </label>
                        <label className="ISBN eingabe">
                            ISBN{" "}
                            <input
                                type="text"
                                name="ISBN"
                                id="ISBN"
                                placeholder="ISBN"
                                required
                            />
                        </label>
                    </div>
                </div>
            </form>
        </div>
    );
};
export default BuchNichtVorhanden;
