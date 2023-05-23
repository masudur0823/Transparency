import { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const createItems = (length, [handleClick]) => {
  let deltaX = 0;
  let difference = 0;
  const swipeDelta = 20;

  return Array.from({ length }).map((item, i) => (
    <div
      data-value={i + 1}
      className="item"
      onMouseDown={(e) => (deltaX = e.pageX)}
      onMouseUp={(e) => (difference = Math.abs(e.pageX - deltaX))}
      onClick={() => difference < swipeDelta && handleClick(i)}
    >
      <span className="item-inner" />
    </div>
  ));
};

export default function ImageSlider() {
  const items = [
    <div className="item" data-value="1">
      1
    </div>,
    <div className="item" data-value="2">
      2
    </div>,
    <div className="item" data-value="3">
      3
    </div>,
    <div className="item" data-value="4">
      4
    </div>,
    <div className="item" data-value="5">
      5
    </div>,
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);

  return (
    <div className="py-8 w-3/5 mx-auto border my-16">
      <AliceCarousel
        mouseTracking
        items={items}
        activeIndex={activeIndex}
        disableDotsControls
        disableButtonsControls
        controlsStrategy="alternate"
      />
      

      <button onClick={slidePrev}>prev</button>
      <button onClick={slideNext}>next</button>
    </div>
  );
}
