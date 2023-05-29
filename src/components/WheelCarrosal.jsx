import down from "../assets/images/icons/wheel_arrow_down.svg";
import up from "../assets/images/icons/wheel_arrow_up.svg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Mousewheel } from "swiper";
import { useState } from "react";

export default function WheelCarrosal({ slides, setActiveIndex }) {
  const [swiper, setSwiper] = useState(null);
  const nexto = () => {
    swiper.slideNext();
  };
  const prevto = () => {
    swiper.slidePrev();
  };
  return (
    <div className="inline-block relative">
      <div className="h-18 overflow-hidden">
        <Swiper
          onSlideChange={(v) => {
            setActiveIndex(v.activeIndex);
            // console.log("Sliderindex:", v.activeIndex);
          }}
          direction={"vertical"}
          slidesPerView={1}
          centeredSlides={true}
          // loop={true}
          mousewheel={true}
          modules={[Mousewheel]}
          className="mySwiper mt-6 h-6 overflow-visible"
          onSwiper={(s) => {
            setSwiper(s);
          }}
        >
          {slides.map((item, index) => (
            <SwiperSlide key={index} className="text-my_xs md:text-base">
              {item}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex flex-col gap-2 absolute top-1/2 -left-6 -translate-y-1/2">
        <button onClick={prevto}>
          <img src={up} alt="" />
        </button>
        <button onClick={nexto}>
          <img src={down} alt="" />
        </button>
      </div>
      <div className="absolute top-1/2 -right-6 -translate-y-1/2 w-4 h-4 bg-yellow rounded-full outline outline-2 outline-black border-2 border-white"></div>
    </div>
  );
}
