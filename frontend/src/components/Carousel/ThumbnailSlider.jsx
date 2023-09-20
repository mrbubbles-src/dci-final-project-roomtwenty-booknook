import { Pagination, A11y } from "swiper/modules";
import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import NoImage from "../../../public/images/various/no-image.png";
import "swiper/scss";
import "swiper/scss/pagination";
import "./carousel.scss";
// import "./thumbNailSlider.scss";

const ThumbnailSlider = ({ slides }) => {
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
                    const { title, authors } = slide.bookdetails.volumeInfo;

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
                                    <h4 className="book-slide-information-author">
                                        {(authors &&
                                            authors.join(
                                                authors.length === 1
                                                    ? ""
                                                    : " & "
                                            )) ||
                                            "Unbekannter Autor"}
                                    </h4>
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
