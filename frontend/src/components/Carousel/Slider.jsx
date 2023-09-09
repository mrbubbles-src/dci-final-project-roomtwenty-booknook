import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import NoImage from "../../../public/images/various/no-image.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Slider = ({ slides }) => {
    console.log("slides", slides);

    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {slides &&
                slides.map((slide, index) => {
                    const { smallThumbnail, medium } =
                        slide.bookdetails.volumeInfo.imageLinks || {};
                    const { title, authors } = slide.bookdetails.volumeInfo;
                    return (
                        <SwiperSlide key={index}>
                            <img
                                src={
                                    smallThumbnail ||
                                    medium?.replace("http", "https") ||
                                    NoImage
                                }
                                alt={title}
                            />{" "}
                            <p>{title}</p>
                            {authors &&
                                authors.map((author, index) => {
                                    return <p key={index}>{author}</p>;
                                })}
                        </SwiperSlide>
                    );
                })}
            {/* <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide> */}
            ...
        </Swiper>
    );
};

export default Slider;
