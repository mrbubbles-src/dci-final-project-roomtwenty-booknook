import React from "react";

const Kontaktformular = () => {
    return (
        <div>
            <div>
                <form id="Kontaktformular" method="post" action="submit">
                    {" "}
                    <div>
                        <h1>Kontakt - Was ist dein Anliegen?</h1>
                        <p>Wir antworten Dir persönlich!</p>
                    </div>
                    <div className="Formfelderrahmen">
                        <label>
                            Name{" "}
                            <input
                                type="text"
                                name="Kontaktname"
                                id="Kontaktname"
                                required
                            />
                        </label>
                        <label>
                            Email{" "}
                            <input
                                type="text"
                                name="Kontaktemail"
                                id="Kontaktemail"
                                required
                            />
                        </label>
                        <label>
                            Kommentar / Fragen
                            <textarea
                                name="Kontaktnachricht"
                                id="Kontaktnachricht"
                                cols="30"
                                rows="10"
                            ></textarea>
                        </label>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Kontaktformular;
