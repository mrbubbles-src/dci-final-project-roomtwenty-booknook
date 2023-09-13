import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import React, { useState, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import NoImage from "../../../public/images/various/no-image.png";
import Modal from "../Modal/Modal";
import { BookNookContext } from "../../context/BookNookProvider";
import "./carousel.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import LeseFortschritt from "../UserProfilContent/CurrentlyReadingCard/LeseFortschritt/LeseFortschritt";
const Slider = ({ slides }) => {
    const [showEditModal, setShowEditModal] = useState(false);
    const { currentPageProgress } = useContext(BookNookContext);
    const handleShowEditModal = () => setShowEditModal(true);
    const handleCloseEditModal = () => setShowEditModal(false);
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            // navigation // pfeile funktionieren mobil nicht
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
        >
            {slides &&
                slides.map((slide, index) => {
                    const singlePageID = slide.bookdetails.id;
                    const { smallThumbnail, medium } =
                        slide.bookdetails.volumeInfo.imageLinks || {};
                    const { title, authors, pageCount } =
                        slide.bookdetails.volumeInfo;
                    const currentPage = slide.currentPage;

                    return (
                        <SwiperSlide key={index}>
                            <div className="currently-reading-slide-container-grid">
                                <article className="currently-reading-slide-image-container">
                                    <img
                                        src={
                                            (smallThumbnail || medium)?.replace(
                                                "http",
                                                "https"
                                            ) || NoImage
                                        }
                                        alt={title}
                                        // BILDGRÖßE ANPASSEN NUR SO ZUM TESTEN SO EINGESTELLT
                                        width={"100px"}
                                    />{" "}
                                </article>
                                <article className="currently-reading-slide-information">
                                    <h4> {title || "Unbekannter Titel"}</h4>
                                    <h5>
                                        {(authors &&
                                            authors.join(
                                                authors.length === 1
                                                    ? ""
                                                    : " & "
                                            )) ||
                                            "Unbekannter Autor"}
                                    </h5>

                                    <aside className="currently-reading-progress">
                                        <h3>Fortschritt</h3>{" "}
                                        <div className="fakebar">
                                            <p>
                                                Aktuelle Seite{" "}
                                                {currentPageProgress ||
                                                    currentPage}{" "}
                                                von {pageCount}
                                            </p>
                                        </div>
                                        <button onClick={handleShowEditModal}>
                                            Edit
                                        </button>
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
