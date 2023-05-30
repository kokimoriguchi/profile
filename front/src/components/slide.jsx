import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./slide-style.css";

const Slide = () => {
  const slides = [
    {
      imgSrc: "/images/station-g8d9470f30_640.jpg",
      altText: "シフト管理アプリ",
      content: "aaaaaaaaaaaaaaaaaaaaaaaaaaa",
    },
    {
      imgSrc: "/images/sail-g71884137e_640.jpg",
      altText: "DEMO商品管理システム",
      content: "aaaaaaaaaaaaaaaaaaaaaaaaaaa",
    },
    {
      imgSrc: "/images/road-g487d9f082_1280.jpg",
      altText: "Todoアプリ",
      content: "aaaaaaaaaaaaaaaaaaaaaaaaaaa",
    },
    {
      imgSrc: "/images/bridge-g065b575da_640.jpg",
      altText: "??????????",
      content: "aaaaaaaaaaaaaaaaaaaaaaaaaaa",
    },
    {
      imgSrc: "/images/bird-g6d3e981be_640.jpg",
      altText: "??????????",
      content: "aaaaaaaaaaaaaaaaaaaaaaaaaaa",
    },
  ];

  return (
    <div className="h-auto relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 shadow-lg md:py-10 xl:py-28">
      <div className="h-max w-full text-center">
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            601: { slidesPerView: 2 },
            1025: { slidesPerView: 3 },
          }}
          loop={true}
          modules={[Navigation, Pagination, Autoplay]}
          className="h-max"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="text-center">
                <img src={slide.imgSrc} alt={slide.altText} />
                <p>{slide.content}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export default Slide;
