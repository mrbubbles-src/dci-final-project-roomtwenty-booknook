import { Pagination, A11y } from "swiper/modules";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import ReadMoreCards from "../ReadMore/ReadMoreCards";
import StarRatings from "react-star-ratings";
import NoImage from "../../../public/images/various/no-image.png";
import "swiper/scss";
import "swiper/scss/pagination";
import "./carousel.scss";
import { BookNookContext } from "../../context/BookNookProvider";
// import "./thumbNailSlider.scss";

const ThumbnailSlider = ({ slides }) => {
    const { bookData } = useContext(BookNookContext);
    const [singleBookData, setSingleBookData] = useState({});
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
    return (
        <Swiper
            modules={[Pagination, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ clickable: true }}
        >
            {slides &&
                slides.map((slide, index) => {
                    const singlePageID = slide.bookdetails.id;
                    const { smallThumbnail, medium, large, extralarge } =
                        slide.bookdetails.volumeInfo.imageLinks || {};
                    const {
                        title,
                        subtitle,
                        authors,
                        description,
                        averageRating,
                        ratingsCount,
                    } = slide.bookdetails.volumeInfo;

                    return (
                        <SwiperSlide key={index}>
                            <div className="slide-container-grid">
                                <article className="slide-image-container">
                                    <Link
                                        className="card-image-anchor-tag"
                                        to={`/buch/${singlePageID}`}
                                    >
                                        <img
                                            className="cover-image"
                                            src={
                                                (
                                                    extralarge ||
                                                    large ||
                                                    medium ||
                                                    smallThumbnail
                                                )?.replace("http", "https") ||
                                                NoImage
                                            }
                                            alt={title}
                                        />{" "}
                                    </Link>
                                </article>
                                <article className="book-slide-information">
                                    <h4 className="book-slide-information-title">
                                        {" "}
                                        {title || "Unbekannter Titel"}
                                    </h4>
                                    {subtitle ? (
                                        <h3 className="book-slide-information-subtitle card-hidden-item">
                                            {subtitle}
                                        </h3>
                                    ) : null}
                                    <h4 className="book-slide-information-author">
                                        {(authors &&
                                            authors.join(
                                                authors.length === 1
                                                    ? ""
                                                    : " & "
                                            )) ||
                                            "Unbekannter Autor"}
                                    </h4>
                                    <p className="book-slide-information-description">
                                        {description ? (
                                            <ReadMoreCards
                                                singlePageID={singlePageID}
                                            >
                                                {description.replace(
                                                    /<\/?[^>]+(>|$)/g,
                                                    ""
                                                )}
                                            </ReadMoreCards>
                                        ) : (
                                            "Keine Beschreibung verfügbar"
                                        )}
                                    </p>
                                    <div className="single-book-rating-container card-hidden-item">
                                        <p className="single-book-avg-rating">
                                            <strong>
                                                {averageRating ||
                                                    bookDataAverageRating ||
                                                    0}
                                            </strong>
                                        </p>{" "}
                                        <StarRatings
                                            rating={
                                                averageRating ||
                                                bookDataAverageRating ||
                                                0
                                            }
                                            starRatedColor="orange"
                                            name="single-book-rating"
                                            starDimension="20px"
                                            starSpacing="1px"
                                        />
                                        <p className="single-book-rating-count">
                                            bei{" "}
                                            <strong>
                                                {ratingsCount ||
                                                    bookDataRatingsCount ||
                                                    0}
                                            </strong>{" "}
                                            {ratingsCount === 1 ||
                                            bookDataRatingsCount === 1
                                                ? "Bewertung"
                                                : "Bewertungen"}
                                        </p>
                                    </div>
                                </article>
                                {/* <aside className="currently-reading-progress">
                                <aside className="progress-info-container">
                                    <h5 className="currently-reading-progress-title">
                                        Buchfortschritt
                                    </h5>{" "}
                                    <p className="currently-reading-progress-count">
                                        Seite {currentPage} von {pageCount}{" "}
                                        <span className="pencil-icon">
                                            <FontAwesomeIcon
                                                icon={faPencil}
                                                onClick={
                                                    handleShowEditModal
                                                }
                                            />
                                        </span>
                                    </p>
                                </aside>
                                <div className="progress-xp-bar-container">
                                    <ProgressBar
                                        completed={Math.floor(
                                            ((currentPage || 0) /
                                                pageCount) *
                                                100
                                        )}
                                        animateOnRender={true}
                                        isLabelVisible={false}
                                        bgColor="#02c1c2"
                                        baseBgColor="#102d5b"
                                        // margin="5px 0 10px 0"
                                    />
                                    <p className="progress-xp-percent">
                                        <span className="progress-xp-percent-count">
                                            <strong>
                                                {Math.floor(
                                                    ((currentPage || 0) /
                                                        pageCount) *
                                                        100
                                                )}
                                            </strong>
                                        </span>{" "}
                                        % bereits gelesen
                                    </p>
                                </div>
                            </aside> */}
                            </div>
                            {/* {showEditModal && (
                            <Modal onClose={handleCloseEditModal}>
                                <LeseFortschritt
                                    bookID={`${slide.book}`}
                                    singlePageID={singlePageID}
                                    pageCount={pageCount}
                                />
                            </Modal>
                        )} */}
                        </SwiperSlide>
                    );
                })}
        </Swiper>
        // <Swiper
        //     modules={[Pagination, A11y]}
        //     spaceBetween={0}
        //     slidesPerView={2}
        //     pagination={{ clickable: true }}
        // >
        //     {slides.map((slide, index) => {
        //         const { smallThumbnail, medium, large, extralarge } =
        //             slide.bookdetails.volumeInfo.imageLinks || {};
        //         const { title, authors } = slide.bookdetails.volumeInfo;
        //         return (
        //             <SwiperSlide key={index}>
        //                 <div className="currently-reading-slide-container-grid">
        //                     <di className="currently-reading-slide-image-container">
        //                         <Link
        //                             className="card-image-anchor-tag"
        //                             to={`/buch/${slide.bookdetails.id}`}
        //                         >
        //                             <img
        //                                 className="liest-derzeit-cover"
        //                                 src={
        //                                     (
        //                                         extralarge ||
        //                                         large ||
        //                                         medium ||
        //                                         smallThumbnail
        //                                     )?.replace("http", "https") ||
        //                                     NoImage
        //                                 }
        //                                 alt={slide.bookdetails.volumeInfo}
        //                             />{" "}
        //                         </Link>
        //                         <div className="listen-book-info">
        //                             <h5 className="tns-title">
        //                                 {" "}
        //                                 {title || "Unbekannter Titel"}
        //                             </h5>
        //                             <br />
        //                             <h5 className="tns-author">
        //                                 {(authors &&
        //                                     authors.join(
        //                                         authors.length === 1
        //                                             ? ""
        //                                             : " & "
        //                                     )) ||
        //                                     "Unbekannter Autor"}
        //                             </h5>
        //                         </div>
        //                     </di>
        //                 </div>
        //             </SwiperSlide>
        //         );
        //     })}
        // </Swiper>
    );
};

export default ThumbnailSlider;
