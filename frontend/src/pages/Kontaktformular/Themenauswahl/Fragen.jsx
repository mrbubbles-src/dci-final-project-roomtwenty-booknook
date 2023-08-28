import React from "react";

const Fragen = () => {
    return (
        <div>
            <form id="Kontaktformular" method="post" action="submit">
                {" "}
                <div>
                    <h1>Fragen?</h1>
                    <p>Wir antworten Dir persönlich!</p>
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
                        <label>
                            Kommentar/Fragen
                            <textarea
                                name="Kontaktnachricht"
                                id="Kontaktnachricht"
                                cols="30"
                                rows="10"
                                placeholder="Anregungen/Wünsche/Ideen/Probleme"
                            ></textarea>
                        </label>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Fragen;
