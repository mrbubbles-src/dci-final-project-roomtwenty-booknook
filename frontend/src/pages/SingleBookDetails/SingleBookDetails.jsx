import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import NoImage from "../../../public/images/various/no-image.png";
import "./singleBookDetails.scss";

const SingleBookDetails = () => {
    const { id } = useParams();
    const [isSingleBookLoading, setIsSingleBookLoading] = useState(true);
    const [singleBookData, setSingleBookData] = useState({});
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
        authors,
        publisher,
        publishedDate,
        description,
        pageCount,
        categories,
        averageRating,
        ratingCount,
        previewLink,
    } = singleBookData.volumeInfo || {};
    const { type, identifier } =
        singleBookData.volumeInfo.industryIdentifiers || {}; // isbn 10+13
    const { smallThumbnail, thumbnail, small, medium, large, extraLarge } =
        singleBookData.volumeInfo.imageLinks || {};

    const genres = [];

    categories.forEach((category) => {
        const tempCat = category.split(" / ");
        tempCat.forEach((element) => {
            if (!genres.includes(element)) {
                genres.push(element);
            }
        });
    });

    return (
        <div className="single-book-container">
            <h2 className="single-book-title">{title}</h2>
            <img
                src={medium || thumbnail || smallThumbnail || NoImage}
                alt={`${title} cover`}
            />
            <p>{description}</p>
            <p>
                Genres:{" "}
                {genres && genres.length >= 1
                    ? genres.map((category, index) => {
                          return (
                              <span className="genre" key={index}>
                                  {category}
                              </span>
                          );
                      })
                    : "keine Genres bekannt"}
            </p>
        </div>
    );
};

export default SingleBookDetails;
