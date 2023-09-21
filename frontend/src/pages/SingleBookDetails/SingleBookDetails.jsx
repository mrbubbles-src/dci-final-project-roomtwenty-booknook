import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import NoImage from "../../../public/images/various/no-image.png";
import "./singleBookDetails.scss";
import { BookNookContext } from "../../context/BookNookProvider";
import ReactCountryFlag from "react-country-flag";
import StarRatings from "react-star-ratings";
import AddToLists from "../../components/AddToLists/AddToLists";
import ReadMore from "../../components/ReadMore/ReadMore";
import ReadMoreSpans from "../../components/ReadMore/ReadMoreSpans";

const SingleBookDetails = () => {
    const { id } = useParams();
    const [isSingleBookLoading, setIsSingleBookLoading] = useState(true);
    const [singleBookData, setSingleBookData] = useState({});
    const { bookData, token } = useContext(BookNookContext);
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    const [isVisible, setIsVisible] = useState(true);
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(
                `https://roomtwenty-booknook-backend.onrender.com/books/singlebook/${id}`
            );
            const data = await response.json();
            setSingleBookData(data);
            setIsSingleBookLoading(false);
            // console.log(data);
        }
        fetchData();
    }, []);

    useEffect(() => {
        const handleResize = () => {
            const newWindowSize = {
                width: window.innerWidth,
                height: window.innerHeight,
            };
            setWindowSize(newWindowSize);

            const thresholdWidth = 1024;
            const thresholdHeight = 100;

            if (
                newWindowSize.width < thresholdWidth ||
                newWindowSize.height < thresholdHeight
            ) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };
        window.addEventListener("resize", handleResize);

        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [isVisible]);

    if (isSingleBookLoading) {
        return <LoadingSpinner />;
    }

    const {
        title,
        subtitle,
        authors,
        publisher,
        publishedDate,
        description,
        pageCount,
        categories,
        averageRating,
        ratingsCount,
        language,
        canonicalVolumeLink,
        industryIdentifiers,
    } = singleBookData.volumeInfo || {};

    const { smallThumbnail, thumbnail, medium, large, extraLarge } =
        singleBookData.volumeInfo.imageLinks || {};

    const { webReaderLink } = singleBookData.accessInfo || {};

    const mongoDBBookID = singleBookData._id;

    let isbn10Title = "";
    let isbn10Number = "";
    let isbn13Title = "";
    let isbn13Number = "";

    if (industryIdentifiers) {
        for (const industryIdentifier of industryIdentifiers) {
            if (
                industryIdentifier.type === "ISBN_10" ||
                industryIdentifier.type.includes("10")
            ) {
                isbn10Title = industryIdentifier.type;
                isbn10Number = industryIdentifier.identifier;
            } else {
                isbn13Title = industryIdentifier.type;
                isbn13Number = industryIdentifier.identifier;
            }
        }
    }

    const genres = [];

    categories &&
        categories.forEach((category) => {
            const tempCat = category.split(" / ");
            tempCat.forEach((element) => {
                if (!genres.includes(element)) {
                    genres.push(element);
                }
            });
        });

    function findInBookData(bookData, id) {
        if (!bookData || !bookData.items) {
            return null;
        }
        for (let i = 0; i < bookData.items.length; i++) {
            if (bookData.items[i].id === id) {
                return bookData.items[i];
            }
        }
        return null;
    }
    const item = findInBookData(bookData, singleBookData.id);
    const bookDataAverageRating = item ? item.volumeInfo.averageRating : 0;
    const bookDataRatingsCount = item ? item.volumeInfo.ratingsCount : 0;
    const handleSendToLists = async (url) => {
        const body = {
            id: id,
            volumeInfo: {
                title: title,
                subtitle: subtitle,
                authors: authors,
                publisher: publisher,
                publishedDate: publishedDate,
                description: description,
                averageRating: averageRating || bookDataAverageRating || 0,
                ratingsCount: ratingsCount || bookDataRatingsCount || 0,
                language: language,
                canonicalVolumeLink: canonicalVolumeLink,
                industryIdentifiers: industryIdentifiers,
                categories: categories,
                pageCount: pageCount,
                imageLinks: {
                    smallThumbnail: smallThumbnail,
                    thumbnail: thumbnail,
                    medium: medium,
                    large: large,
                    extraLarge: extraLarge,
                },
            },
            accessInfo: {
                webReaderLink: webReaderLink,
            },
        };
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(body),
            });

            const responseJson = await response.json();
            // console.log(responseJson);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <section className="single-book-container">
            <div className="single-book-headings-container">
                <h2 className="single-book-title">
                    {title || "Unbekannter Titel"}
                </h2>
                {subtitle ? (
                    <h3 className="single-book-subtitle">{subtitle}</h3>
                ) : null}
                <h5 className="single-book-author">
                    von{" "}
                    {(authors &&
                        authors.join(authors.length === 1 ? "" : " & ")) ||
                        "Unbekannter Autor"}
                </h5>
            </div>
            <section className="single-book-grid-container">
                <div className="single-book-add-to-lists-container">
                    <AddToLists
                        onButtonClick={handleSendToLists}
                        bookId={mongoDBBookID}
                    />
                </div>
                <div className="single-book-image-container">
                    <a
                        href={
                            (
                                extraLarge ||
                                large ||
                                medium ||
                                thumbnail ||
                                smallThumbnail
                            )?.replace("http", "https") || NoImage
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        alt={`${title} cover`}
                    >
                        <img
                            className="single-book-image"
                            src={
                                (
                                    extraLarge ||
                                    large ||
                                    medium ||
                                    thumbnail ||
                                    smallThumbnail
                                )?.replace("http", "https") || NoImage
                            }
                            alt={`${title} cover`}
                        />
                    </a>
                </div>
                <div className="single-book-rating-container">
                    <p className="single-book-avg-rating">
                        <strong>
                            {averageRating || bookDataAverageRating || 0}
                        </strong>
                    </p>{" "}
                    <StarRatings
                        rating={averageRating || bookDataAverageRating || 0}
                        starRatedColor="orange"
                        name="single-book-rating"
                        starDimension="20px"
                        starSpacing="1px"
                    />
                    <p className="single-book-rating-count">
                        bei{" "}
                        <strong>
                            {ratingsCount || bookDataRatingsCount || 0}
                        </strong>{" "}
                        {ratingsCount === 1 || bookDataRatingsCount === 1
                            ? "Bewertung"
                            : "Bewertungen"}
                    </p>
                </div>
                <article className="single-book-description-container">
                    <p className="single-book-description">
                        {isVisible ? (
                            description !== undefined && description !== "" ? (
                                description.replace(/<\/?[^>]+(>|$)/g, "")
                            ) : (
                                "Keine Beschreibung verfügbar"
                            )
                        ) : description !== undefined && description !== "" ? (
                            <ReadMore>
                                {description.replace(/<\/?[^>]+(>|$)/g, "")}
                            </ReadMore>
                        ) : (
                            "Keine Beschreibung verfügbar"
                        )}
                    </p>
                </article>
                <article className="single-book-info-section">
                    <h5 className="single-book-info-section-title">
                        Buchinformationen:
                    </h5>
                    <p className="single-book-pagecount-count">
                        <strong>Seiten:</strong>
                        <br />
                        {pageCount || "Unbekannte anzahl"}
                    </p>
                    <p className="single-book-publisher">
                        <strong>Verlag:</strong>
                        <br />
                        {publisher}
                    </p>
                    <p className="single-book-first-published-date">
                        <strong>Veröffentlicht:</strong>
                        <br />
                        {publishedDate || "Unbekanntes Datum"}
                    </p>
                    <p className="single-book-language">
                        <strong>Sprache:</strong> <br />
                        {language ? (
                            <ReactCountryFlag
                                countryCode={
                                    language === "en" ? "gb" : language
                                }
                                className="single-book-languageflag"
                                svg
                                alt={language}
                                title={language}
                            />
                        ) : (
                            "keine Information vorhanden."
                        )}
                    </p>
                    <p className="single-book-isbn-number isbn-ten">
                        <strong>
                            {isbn10Title?.replace("_", "-") || "ISBN-10"}:
                        </strong>
                        <br />
                        {isbn10Number || "Keine ISBN-10 bekannt"}
                    </p>{" "}
                    <p className="single-book-isbn-number isbn-thirteen">
                        <strong>
                            {isbn13Title?.replace("_", "-") || "ISBN-13"}:
                        </strong>
                        <br />
                        {isbn13Number || "Keine ISBN-13 bekannt"}
                    </p>
                </article>
                <article className="single-book-actions-external-links-container">
                    {canonicalVolumeLink ? (
                        <a
                            className="single-book-actions-external-link single-book-actions-external-link-left"
                            href={canonicalVolumeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <strong>
                                Mehr Informationen auf GooglePlay Books
                            </strong>
                        </a>
                    ) : null}
                    {webReaderLink ? (
                        <a
                            className="single-book-actions-external-link single-book-actions-external-link-right"
                            href={webReaderLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <strong>Leseprobe auf GooglePlay Books</strong>
                        </a>
                    ) : null}
                </article>
                <article className="single-book-genres-container">
                    <h4 className="single-book-genre-title">Genres:</h4>
                    {isVisible ? (
                        genres && genres.length >= 1 ? (
                            genres.map((category, index) => (
                                <span className="single-book-genre" key={index}>
                                    <strong>{category}</strong>
                                </span>
                            ))
                        ) : (
                            "Keine Genres bekannt"
                        )
                    ) : (
                        <ReadMoreSpans>
                            {genres && genres.length >= 1
                                ? genres.map((category, index) => (
                                      <span
                                          className="single-book-genre"
                                          key={index}
                                      >
                                          <strong>{category}</strong>
                                      </span>
                                  ))
                                : "Keine Genres bekannt"}
                        </ReadMoreSpans>
                    )}
                </article>
            </section>
        </section>
    );
};

export default SingleBookDetails;
