import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slide = () => {
  const slides = [
    {
      imgSrc: "/images/station-g8d9470f30_640.jpg",
      altText: "シフト管理アプリ",
    },
    {
      imgSrc: "/images/sail-g71884137e_640.jpg",
      altText: "DEMO商品管理システム",
    },
    {
      imgSrc: "/images/road-g487d9f082_1280.jpg",
      altText: "Todoアプリ",
    },
    {
      imgSrc: "/images/bridge-g065b575da_640.jpg",
      altText: "??????????",
    },
    {
      imgSrc: "/images/road-g487d9f082_1280.jpg",
      altText: "??????????",
    },
  ];

  return (
    <div className="h-auto relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 shadow-lg md:py-10 xl:py-28">
      <div className="h-4/5 w-full text-center">
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
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
          modules={[Pagination, Autoplay]}
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
