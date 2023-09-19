import { Pagination, A11y } from "swiper/modules";
import React, { useState, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import NoImage from "../../../public/images/various/no-image.png";
import Modal from "../Modal/Modal";
import { BookNookContext } from "../../context/BookNookProvider";
import "./carousel.scss";
import "swiper/css";
import "swiper/css/pagination";
import LeseFortschritt from "../UserProfilContent/CurrentlyReadingCard/LeseFortschritt/LeseFortschritt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

const Slider = ({ slides }) => {
    const [showEditModal, setShowEditModal] = useState(false);
    const { currentPageProgress } = useContext(BookNookContext);
    const handleShowEditModal = () => setShowEditModal(true);
    const handleCloseEditModal = () => setShowEditModal(false);
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
                    const { title, authors, pageCount } =
                        slide.bookdetails.volumeInfo;
                    const currentPage = slide.currentPage;

                    return (
                        <SwiperSlide key={index}>
                            <div className="currently-reading-slide-container-grid">
                                <article className="currently-reading-slide-image-container">
                                    <img
                                        className="liest-derzeit-cover"
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
                                        // BILDGRÖßE ANPASSEN NUR SO ZUM TESTEN SO EINGESTELLT
                                        // width={"100px"}
                                    />{" "}
                                </article>
                                <article className="currently-reading-slide-information">
                                    <h4 className="currently-reading-title">
                                        {" "}
                                        {title || "Unbekannter Titel"}
                                    </h4>
                                    <h4 className="currently-reading-author">
                                        {(authors &&
                                            authors.join(
                                                authors.length === 1
                                                    ? ""
                                                    : " & "
                                            )) ||
                                            "Unbekannter Autor"}
                                    </h4>

                                    <aside className="currently-reading-progress">
                                        <h5 className="currently-reading-progress-title">
                                            Fortschritt
                                        </h5>{" "}
                                        <div className="fakebar">
                                            <p className="currently-reading-progress-count">
                                                Seite{" "}
                                                {currentPageProgress ||
                                                    currentPage}{" "}
                                                von {pageCount}{" "}
                                                <span className="pencil-icon">
                                                    <FontAwesomeIcon
                                                        icon={faPencil}
                                                        onClick={
                                                            handleShowEditModal
                                                        }
                                                    />
                                                </span>
                                            </p>
                                        </div>
                                        {/* <button onClick={handleShowEditModal}>
                                            Edit
                                        </button> */}
                                    </aside>
                                </article>
                            </div>
                            {showEditModal && (
                                <Modal onClose={handleCloseEditModal}>
                                    <LeseFortschritt
                                        bookID={`${slide.book}`}
                                        singlePageID={singlePageID}
                                        pageCount={pageCount}
                                    />
                                </Modal>
                            )}
                        </SwiperSlide>
                    );
                })}
        </Swiper>
    );
};

export default Slider;
