import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import NoImage from "../../../public/images/various/no-image.png";
import "./singleBookDetails.scss";
import { BookNookContext } from "../../context/BookNookProvider";

const SingleBookDetails = () => {
    const { id } = useParams();
    const [isSingleBookLoading, setIsSingleBookLoading] = useState(true);
    const [singleBookData, setSingleBookData] = useState({});
    const { bookData } = useContext(BookNookContext);
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
        canonicalVolumeLink,
        industryIdentifiers,
    } = singleBookData.volumeInfo || {};

    const { smallThumbnail, thumbnail, medium, extraLarge } =
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
                isbn10Title = industryIdentifier.type.replace("_", "-");
                isbn10Number = industryIdentifier.identifier;
            } else {
                isbn13Title = industryIdentifier.type.replace("_", "-");
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

    return (
        <section className="single-book-container">
            <h2 className="single-book-title">
                {title || "Unbekannter Titel"}
            </h2>
            {subtitle ? (
                <h3 className="single-book-subtitle">{subtitle}</h3>
            ) : null}
            <h5 className="single-book-author">
                von {authors || "Unbekannter Autor"}
            </h5>
            <img
                src={medium || thumbnail || smallThumbnail || NoImage}
                alt={`${title} cover`}
            />
            <p className="single-book-description">
                {description?.replace("<p>", "").replace("</p>", "") ||
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
                    {isbn10Title || "ISBN-10"}:{" "}
                    {isbn10Number || "Keine ISBN-10 bekannt"}
                </p>{" "}
                <p className="single-book-isbn">
                    {isbn13Title || "ISBN-13"}:{" "}
                    {isbn13Number || "Keine ISBN-13 bekannt"}
                </p>
                <p className="single-book-rating-container">
                    <span className="single-book-avg-rating">
                        Durchschnittlich bewertet mit{" "}
                        {averageRating || "unbekannter anzahl von"} 🌟
                    </span>{" "}
                    bei{" "}
                    <span className="single-book-ratingcount">
                        {ratingsCount || "unbekannter anzahl"} Bewertungen
                    </span>
                </p>
            </div>
        </section>
    );
};

export default SingleBookDetails;
