import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { StudyBookData } from "../Data/StudyBookData";

SwiperCore.use([Autoplay, Pagination]);

const Slide = () => {
  return (
    <div className="overflow-hidden rounded-lg">
      <div className="h-full w-full text-center">
        <Swiper
          slidesPerView={4}
          spaceBetween={0}
          freeMode={true}
          centeredSlides={true}
          autoplay={{
            delay: 1500,
            waitForTransition: false,
          }}
          speed={1000}
          loop={true}
          modules={[Autoplay]}
          className="h-max"
        >
          {StudyBookData.map((slide, index) => (
            <SwiperSlide key={index} className="">
              <div className="h-[450px] w-[370px] overflow-hidden rounded-lg pr-8">
                <img
                  src={slide.bookImg}
                  alt={slide.bookAlt}
                  className="border-2 border-black h-full w-full object-fill rounded-lg"
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
