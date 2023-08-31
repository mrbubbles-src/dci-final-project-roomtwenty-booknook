import React from "react";

const BuchNichtVorhanden = () => {
    return (
        <form id="Kontaktformular" method="post" action="submit">
            {" "}
            <div>
                <h1>Buch nicht vorhanden?</h1>
                <p>
                    Fülle die Eingabefelder für deine Suche aus und wir melden
                    uns bei dir.
                </p>
            </div>
            <div className="Formfelderrahmen">
                <label className="name eingabe">
                    Name{" "}
                    <input
                        type="text"
                        name="Kontaktname"
                        id="Kontaktname"
                        placeholder="z.B. Biene Maja"
                        required
                    />
                </label>
                <label className="email eingabe">
                    Email{" "}
                    <input
                        type="email"
                        name="Kontaktemail"
                        id="Kontaktemail"
                        placeholder="z.B. du@beispiel.de"
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
                            placeholder="z.B. Tintenherz"
                            required
                        />
                    </label>
                    <label className="Autor eingabe">
                        Autor/Autoren{" "}
                        <input
                            type="text"
                            name="Autor"
                            id="Autor"
                            placeholder="z.B. J.K. Rowling"
                            required
                        />
                    </label>
                    <label className="Publisher eingabe">
                        Verlag{" "}
                        <input
                            type="text"
                            name="Publisher"
                            id="Publisher"
                            placeholder="z.B. Carlsen Verlag"
                        />
                    </label>
                    <label className="PublishedDate eingabe">
                        Veröffentlichungsdatum{" "}
                        <input
                            type="date"
                            name="PublishedDate"
                            id="PublishedDate"
                            placeholder="05.08.1997"
                        />
                    </label>
                    <label className="description eingabe">
                        Beschreibung{" "}
                        <input
                            type="text"
                            name="Description"
                            id="Description"
                            placeholder="z.B. Klappentext"
                        />
                    </label>

                    <label className="linktobookinfos eingabe">
                        BuchInfoLink{" "}
                        <input
                            type="text"
                            name="linktobookinfos"
                            id="linktobookinfos"
                            placeholder="z.B. https://..."
                        />
                    </label>

                    <label className="ISBN eingabe">
                        ISBN{" "}
                        <input
                            type="text"
                            name="ISBN"
                            id="ISBN"
                            placeholder="z.B. 978-3-95981-065-4"
                        />
                    </label>
                    <label className="categorys eingabe">
                        Genre{" "}
                        <input
                            type="text"
                            name="categorys"
                            id="categorys"
                            placeholder="z.B. Fantasy, Horror,.."
                            required
                        />
                    </label>
                    <label className="pagecount eingabe">
                        Seitenanzahl{" "}
                        <input
                            type="text"
                            name="pagecount"
                            id="pagecount"
                            placeholder="z.B. S.837"
                        />
                    </label>
                    <label className="coversmall eingabe">
                        cover klein{" "}
                        <input type="file" name="coversmall" id="coversmall" />
                    </label>
                    <label className="coverlarge eingabe">
                        cover groß{" "}
                        <input type="file" name="coverlarge" id="coverlarge" />
                    </label>
                    <label className="webreaderlink eingabe">
                        Leseprobenlink{" "}
                        <input
                            type="url"
                            name="webreaderlink"
                            id="webreaderlink"
                            placeholder="z.B. https://..."
                        />
                    </label>
                </div>
            </div>
        </form>
    );
};
export default BuchNichtVorhanden;
