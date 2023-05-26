/* eslint-disable react/jsx-key */
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import leftArrow from "../assets/images/slider/leftarrow.svg";
import rightArrow from "../assets/images/slider/rightArrow.svg";
import { useState } from "react";
import smartCar from "../assets/images/icons/smartcar.svg";

function OptionListSlider() {
  const items = [
    <div
      className="item px-3 py-2 bg-white border border-my_grey8 rounded-lg flex items-center gap-3"
      data-value="1"
    >
      <div className="h-9 w-9 p-2 rounded-lg bg-my_grey2">
        <img src={smartCar} className="w-full" alt="smartCar" />
      </div>
      Performance1
    </div>,
    <div
      className="item px-3 py-2 bg-white border border-my_grey8 rounded-lg flex items-center gap-3"
      data-value="1"
    >
      <div className="h-9 w-9 p-2 rounded-lg bg-my_grey2">
        <img src={smartCar} className="w-full" alt="smartCar" />
      </div>
      Performance2
    </div>,
    <div
      className="item px-3 py-2 bg-white border border-my_grey8 rounded-lg flex items-center gap-3"
      data-value="1"
    >
      <div className="h-9 w-9 p-2 rounded-lg bg-my_grey2">
        <img src={smartCar} className="w-full" alt="smartCar" />
      </div>
      Performance3
    </div>,
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);
  return (
    <div className="relative">
      <div className="w-52 mx-auto">
        <AliceCarousel
          disableDotsControls
          disableButtonsControls
          mouseTracking={false}
          items={items}
          controlsStrategy="alternate"
          activeIndex={activeIndex}
        />
      </div>
    
        <img
          src={leftArrow}
          alt=""
          onClick={slidePrev}
          className=" cursor-pointer w-7 sm:w-10 h-7 sm:h-10 absolute left-0 top-3"
        />
        <img
          src={rightArrow}
          alt=""
          onClick={slideNext}
          className=" cursor-pointer  w-7 sm:w-10 h-7 sm:h-10 absolute right-0 top-3"
        />
      
    </div>
  );
}

export default OptionListSlider;
