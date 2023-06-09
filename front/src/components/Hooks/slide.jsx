import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import OpenModal from "./Modal";
import slides from "../Data/SlideData";

SwiperCore.use([Autoplay, Pagination]);

const Slide = () => {
  const [modalState, setModalState] = useState({});
  const closeModal = (index) => {
    setModalState((prev) => ({ ...prev, [index]: false }));
  };

  return (
    <div className="h-auto relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 shadow-lg md:py-10 xl:py-28">
      <div className="h-2/3 w-full text-center">
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 4000,
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
            <SwiperSlide key={index} className="px-6">
              <p className="text-xl pb-5 font-semibold">{slide.altText}</p>
              <p className="text-xs py-8 w-96 h-20 opacity-70">
                {slide.detailContent}
              </p>
              <div
                className="text-center m-auto"
                onClick={() =>
                  setModalState((prev) => ({ ...prev, [index]: true }))
                }
              >
                <img
                  src={slide.imgSrc}
                  alt={slide.altText}
                  className="border-2 border-black h-80 w-screen"
                />
                <p>{slide.content}</p>
                {modalState[index] ? (
                  <OpenModal
                    modalState={modalState[index]}
                    slide={slide}
                    closeModal={() => closeModal(index)}
                    className="fixed top-0 left-0 w-screen h-screen bg-gray-400 flex items-center justify-center opacity-60"
                  />
                ) : (
                  <div className="pt-10"></div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export default Slide;
