import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import React from "react";
import { Link } from "react-router-dom";
import { BookNookContext } from "../../context/BookNookProvider";

import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { Swiper, SwiperSlide } from "swiper/react";
import NoImage from "../../../public/images/various/no-image.png";
import "./carousel.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ThumbnailSlider = ({ slides }) => {
    const { isLoading } = useContext(BookNookContext);
    if (isLoading) {
        return <LoadingSpinner />;
    }
    if (isLoading)
        return (
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={4}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {slides.map((slide, index) => {
                    const { smallThumbnail, medium } =
                        slide.bookdetails.volumeInfo.imageLinks || {};
                    const { title } = slide.bookdetails.volumeInfo;
                    return (
                        <SwiperSlide key={index}>
                            <div className='thumbnail-slide-container'>
                                <img
                                    src={
                                        smallThumbnail ||
                                        medium?.replace("http", "https") ||
                                        NoImage
                                    }
                                    alt={title}
                                />{" "}
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        );
};

export default ThumbnailSlider;
