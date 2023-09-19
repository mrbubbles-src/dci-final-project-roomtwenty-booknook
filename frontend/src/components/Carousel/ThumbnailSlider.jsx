import { Pagination, A11y } from "swiper/modules";
import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import NoImage from "../../../public/images/various/no-image.png";
import "swiper/css";
import "swiper/css/pagination";
import "./thumbNailSlider.scss";

const ThumbnailSlider = ({ slides }) => {
    return (
        <Swiper
            modules={[Pagination, A11y]}
            spaceBetween={0}
            slidesPerView={2}
            pagination={{ clickable: true }}
        >
            {slides.map((slide, index) => {
                const { smallThumbnail, medium, large, extralarge } =
                    slide.bookdetails.volumeInfo.imageLinks || {};
                const { title, authors } = slide.bookdetails.volumeInfo;
                return (
                    <SwiperSlide key={index}>
                        <div className="thumbnail-slide-container">
                            <div>
                                <div className="listen-book-cover-container">
                                    <Link
                                        className="card-image-anchor-tag"
                                        to={`/buch/${slide.bookdetails.id}`}
                                    >
                                        <img
                                            className="listen-book-cover"
                                            src={
                                                (
                                                    extralarge ||
                                                    large ||
                                                    medium ||
                                                    smallThumbnail
                                                )?.replace("http", "https") ||
                                                NoImage
                                            }
                                            alt={slide.bookdetails.volumeInfo}
                                        />{" "}
                                    </Link>
                                </div>
                                <div className="listen-book-info">
                                    <h5 className="tns-title">
                                        {" "}
                                        {title || "Unbekannter Titel"}
                                    </h5>
                                    <br />
                                    <h5 className="tns-author">
                                        {(authors &&
                                            authors.join(
                                                authors.length === 1
                                                    ? ""
                                                    : " & "
                                            )) ||
                                            "Unbekannter Autor"}
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default ThumbnailSlider;
