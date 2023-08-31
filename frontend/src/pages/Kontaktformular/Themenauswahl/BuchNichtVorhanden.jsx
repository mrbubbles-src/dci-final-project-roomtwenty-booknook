import React from "react";

const BuchNichtVorhanden = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [bookTitle, setBookTitle] = useState("");
    const [authors, setAuthors] = useState("");
    const [publisher, setPublisher] = useState("");
    const [publishedDate, setPublishedDate] = useState("");
    const [description, setDescription] = useState("");
    const [bookInfoLink, setBookInfoLink] = useState("");
    const [isbn, setIsbn] = useState("");
    const [genre, setGenre] = useState("");
    const [pageCount, setPageCount] = useState("");
    const [coverSmall, setrCoverSmall] = useState("");
    const [coverLarge, setCoverLarge] = useState("");
    const [webReaderLink, setWebReaderLink] = useState("");

    const handleSubmit = async (event) => {
        try {
            event.preventDeafult();
            const response = await fetch("/kommtnoch", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username,
                    email,
                    bookTitle,
                    authors,
                    publisher,
                    publishedDate,
                    description,
                    bookInfoLink,
                    isbn,
                    genre,
                    pageCount,
                    coverSmall,
                    coverLarge,
                    webReaderLink,
                }),
            });
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form id="Kontaktformular" onSubmit={handleSubmit}>
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
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
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
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
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
                            value={bookTitle}
                            onChange={(event) =>
                                setBookTitle(event.target.value)
                            }
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
                            value={authors}
                            onChange={(event) => setAuthors(event.target.value)}
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
                            value={publisher}
                            onChange={(event) =>
                                setPublisher(event.target.value)
                            }
                            id="Publisher"
                            placeholder="z.B. Carlsen Verlag"
                        />
                    </label>
                    <label className="PublishedDate eingabe">
                        Veröffentlichungsdatum{" "}
                        <input
                            type="date"
                            name="PublishedDate"
                            value={publishedDate}
                            onChange={(event) =>
                                setPublishedDate(event.target.value)
                            }
                            id="PublishedDate"
                            placeholder="05.08.1997"
                        />
                    </label>
                    <label className="description eingabe">
                        Beschreibung{" "}
                        <input
                            type="text"
                            name="Description"
                            value={description}
                            onChange={(event) =>
                                setDescription(event.target.value)
                            }
                            id="Description"
                            placeholder="z.B. Klappentext"
                        />
                    </label>

                    <label className="linktobookinfos eingabe">
                        BuchInfoLink{" "}
                        <input
                            type="text"
                            name="linktobookinfos"
                            value={bookInfoLink}
                            onChange={(event) =>
                                setBookInfoLink(event.target.value)
                            }
                            id="linktobookinfos"
                            placeholder="z.B. https://..."
                        />
                    </label>

                    <label className="ISBN eingabe">
                        ISBN{" "}
                        <input
                            type="text"
                            name="ISBN"
                            value={isbn}
                            onChange={(event) => setIsbn(event.target.value)}
                            id="ISBN"
                            placeholder="z.B. 978-3-95981-065-4"
                        />
                    </label>
                    <label className="categorys eingabe">
                        Genre{" "}
                        <input
                            type="text"
                            name="categorys"
                            value={genre}
                            onChange={(event) => setGenre(event.target.value)}
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
                            value={pageCount}
                            onChange={(event) =>
                                setPageCount(event.target.value)
                            }
                            id="pagecount"
                            placeholder="z.B. S.837"
                        />
                    </label>
                    <label className="coversmall eingabe">
                        cover klein{" "}
                        <input
                            type="file"
                            name="coversmall"
                            value={coverSmall}
                            onChange={(event) =>
                                setrCoverSmall(event.target.value)
                            }
                            id="coversmall"
                        />
                    </label>
                    <label className="coverlarge eingabe">
                        cover groß{" "}
                        <input
                            type="file"
                            name="coverlarge"
                            value={coverLarge}
                            onChange={(event) =>
                                setCoverLarge(event.target.value)
                            }
                            id="coverlarge"
                        />
                    </label>
                    <label className="webreaderlink eingabe">
                        Leseprobenlink{" "}
                        <input
                            type="url"
                            name="webreaderlink"
                            value={webReaderLink}
                            onChange={(event) =>
                                setWebReaderLink(event.target.value)
                            }
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
