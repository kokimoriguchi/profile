import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { StudyBookData } from "../Data/StudyBookData";

SwiperCore.use([Autoplay, Pagination]);

const Slide = () => {
  return (
    <div className="h-auto relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 shadow-lg md:py-10 xl:py-28">
      <div className="h-2/3 w-full text-center">
        <Swiper
          slidesPerView={1}
          freeMode={true}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
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
          {StudyBookData.map((slide, index) => (
            <SwiperSlide key={index} className="px-1">
              <div className="max-h-[450px] min-h-[450px] max-w-[350px]">
                <img
                  src={slide.bookImg}
                  alt={slide.bookAlt}
                  className="border-2 border-black h-auto w-full object-cover rounded-lg shadow-lg hover:opacity-80 transition-all duration-500"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export default Slide;
