import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import NoImage from "../../../public/images/various/no-image.png";
import "./singleBookDetails.scss";
import { BookNookContext } from "../../context/BookNookProvider";
import ReactCountryFlag from "react-country-flag";
import StarRatings from "react-star-ratings";
import AddToLists from "../../components/AddToLists/AddToLists";

const SingleBookDetails = () => {
    const { id } = useParams();
    const [isSingleBookLoading, setIsSingleBookLoading] = useState(true);
    const [singleBookData, setSingleBookData] = useState({});
    const { bookData } = useContext(BookNookContext);
    const [sendToBackendDbLists, setSendToBackendDbLists] = useState({
        id: "",
        volumenInfo: {
            title: "",
            subtitle: "",
            authors: [""],
            publisher: "",
            publisherDate: "",
            descriptions: "",
            averageRating: 0,
            ratingsCount: 0,
            language: "",
            canonicalVolumeLink: "",
            industryIdentifiers: [
                { type: "", identifier: "" },
                { type: "", identifier: "" },
            ],
            categories: [""],
            pageCount: 0,
            imageLinks: {
                smallThumbnail: "",
                thumbnail: "",
                medium: "",
                large: "",
                extraLarge: "",
            },
        },
        accessInfo: {
            webReaderLink: "",
        },
    });

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(
                `http://localhost:3000/books/singlebook/${id}`
            );
            const data = await response.json();
            setSingleBookData(data);
            setIsSingleBookLoading(false);
        }
        fetchData();
    }, []);
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
        try {
            setSendToBackendDbLists({
                id: id,
                volumeInfo: {
                    title: title,
                    subtitle: subtitle,
                    authors: authors,
                    publisher: publisher,
                    publishedDate: publishedDate,
                    description: description,
                    averageRating: averageRating || bookDataAverageRating,
                    ratingsCount: ratingsCount || bookDataRatingsCount,
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
                    webReaderLink: "",
                },
            });
            // console.log(sendToBackendDbLists);
            const response = await fetch(`${url}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(sendToBackendDbLists),
            });
            const responseJson = await response.json();
            console.log(responseJson);
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
            <a
                href={
                    (
                        extraLarge ||
                        large ||
                        medium ||
                        thumbnail ||
                        smallThumbnail
                    ).replace("http", "https") || NoImage
                }
                target="_blank"
                rel="noopener noreferrer"
                alt={`${title} cover`}
            >
                <img
                    className="single-book-image"
                    src={
                        (medium || thumbnail || smallThumbnail).replace(
                            "http",
                            "https"
                        ) || NoImage
                    }
                    alt={`${title} cover`}
                />
            </a>{" "}
            <div className="single-book-info-section">
                <h5 className="single-book-info-section-title">
                    Buchinformationen:
                </h5>
                <p className="single-book-pagecount-container">
                    <span className="single-book-pagecount-count">
                        {pageCount || "Unbekannte anzahl"}
                    </span>{" "}
                    Seiten
                </p>
                <p className="single-book-publisher-container">
                    Verlag:{" "}
                    <span className="single-book-publisher">{publisher}</span>
                </p>
                <p className="single-book-first-published-container">
                    Erstveröffentlichung:{" "}
                    <span className="single-book-first-published-date">
                        {publishedDate || "Unbekanntes Datum"}
                    </span>
                </p>
                <p className="single-book-isbn">
                    {isbn10Title?.replace("_", "-") || "ISBN-10"}:{" "}
                    {isbn10Number || "Keine ISBN-10 bekannt"}
                </p>{" "}
                <p className="single-book-isbn">
                    {isbn13Title?.replace("_", "-") || "ISBN-13"}:{" "}
                    {isbn13Number || "Keine ISBN-13 bekannt"}
                </p>
                <p className="single-book-language">
                    Sprache:{" "}
                    {language ? (
                        <ReactCountryFlag
                            countryCode={language === "en" ? "gb" : language}
                            className="single-book-languageflag"
                            svg
                            alt={language}
                            title={language}
                        />
                    ) : (
                        "keine Information vorhanden."
                    )}
                </p>
            </div>
            <div className="single-book-actions-container">
                {canonicalVolumeLink ? (
                    <a
                        className="single-book-actions-external-link"
                        href={canonicalVolumeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Mehr Informationen auf GooglePlay Books
                    </a>
                ) : null}
                {webReaderLink ? (
                    <a
                        className="single-book-actions-external-link"
                        href={webReaderLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Leseprobe auf GooglePlay Books
                    </a>
                ) : null}
                <AddToLists onButtonClick={handleSendToLists} />
            </div>
            <div className="single-book-rating-container">
                <span className="single-book-avg-rating">
                    {averageRating || bookDataAverageRating || 0}{" "}
                </span>{" "}
                <StarRatings
                    rating={averageRating || bookDataAverageRating || 0}
                    starRatedColor="orange"
                    name="single-book-rating"
                    starDimension="20px"
                    starSpacing="1px"
                />
                /{" "}
                <span className="single-book-ratingcount">
                    {ratingsCount || bookDataRatingsCount || 0}{" "}
                    {ratingsCount === 1 || bookDataRatingsCount === 1
                        ? "Bewertung"
                        : "Bewertungen"}
                </span>
            </div>
            <p className="single-book-description">
                {/* entfernt jegliche html tags aus der beschreibung */}
                {description?.replace(/<\/?[^>]+(>|$)/g, "") ||
                    "Keine Beschreibung verfügbar"}
            </p>
            <p className="single-book-genre-container">
                Genres:{" "}
                {genres && genres.length >= 1
                    ? genres.map((category, index) => {
                          return (
                              <span className="single-book-genre" key={index}>
                                  {category}
                              </span>
                          );
                      })
                    : "keine Genres bekannt"}
            </p>
        </section>
    );
};

export default SingleBookDetails;
