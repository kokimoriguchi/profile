import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import PortfolioData from "../Data/PortfolioData";
import { SiGithub } from "react-icons/si";

SwiperCore.use([Autoplay, Pagination]);

const Slide = () => {
  return (
    <div className="overflow-hidden rounded-lg">
      <div className="h-full w-full">
        <Swiper
          slidesPerView={3}
          spaceBetween={1}
          freeMode={true}
          centeredSlides={true}
          autoplay={{
            delay: 50,
            waitForTransition: false,
          }}
          speed={500}
          loop={true}
          modules={[Autoplay, Pagination, Navigation]}
          pagination={{ clickable: true }}
          navigation={{ clickable: true }}
          className="h-max"
        >
          {PortfolioData.map((portfolioData, index) => (
            <SwiperSlide key={index} className="">
              <table
                className="h-[540px] w-[450px] mb-3 pb-5 ml-3 shadow-2xl rounded-xl border-collapse bg-white"
                key={index}
              >
                <thead>
                  <tr>
                    <th className=" flex flex-row justify-center"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className=" bg-indigo-200 rounded-t-xl">
                      <img
                        src={portfolioData.imgSrc}
                        alt={portfolioData.altText}
                        className="w-[400] min-h-[250px] transition-all duration-500"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="h-64 flex flex-col pt-4 px-4">
                      <p className="text-xl font-medium">
                        {portfolioData.altText}
                      </p>
                      <p className="pt-6 text-sm opacity-50">Description</p>
                      <p className="flex-grow font-medium">
                        {portfolioData.detailContent}
                      </p>
                      <a
                        href={portfolioData.gitUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-indigo-400 cursor-pointer transition-all flex flex-row justify-end duration-200"
                      >
                        <p className="pt-1 pr-2">check</p>
                        <SiGithub className="text-3xl" />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export default Slide;
