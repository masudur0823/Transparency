/* eslint-disable react/jsx-key */
import { useState } from "react";
import leftArrow from "../assets/images/slider/leftarrow.svg";
import rightArrow from "../assets/images/slider/rightArrow.svg";
import img1 from "../assets/images/slider/car1.png";
import img2 from "../assets/images/slider/car2.png";
import img3 from "../assets/images/slider/car3.png";
import img4 from "../assets/images/slider/car4.png";
import img5 from "../assets/images/slider/car5.png";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export default function ImageSlider() {
  const items = [
    <div className="item" data-value="1">
      <img src={img1} className="w-full slider_img" />
    </div>,
    <div className="item" data-value="2">
      <img src={img2} className="w-full slider_img" />
    </div>,
    <div className="item" data-value="3">
      <img src={img3} className="w-full slider_img" />
    </div>,
    <div className="item" data-value="4">
      <img src={img4} className="w-full slider_img" />
    </div>,
    <div className="item" data-value="5">
      <img src={img5} className="w-full slider_img" />
    </div>,
  ];

  const thumbItems = (items, [setThumbIndex, setThumbAnimation]) => {
    return items.map((item, i) => (
      <div
        className="thumb"
        onClick={() => (setThumbIndex(i), setThumbAnimation(true))}
      >
        {item}
      </div>
    ));
  };

  const [mainIndex, setMainIndex] = useState(0);
  const [mainAnimation, setMainAnimation] = useState(false);
  const [thumbIndex, setThumbIndex] = useState(0);
  const [thumbAnimation, setThumbAnimation] = useState(false);
  const [thumbs] = useState(
    thumbItems(items, [setThumbIndex, setThumbAnimation])
  );

  const slideNext = () => {
    if (!thumbAnimation && thumbIndex < thumbs.length - 1) {
      setThumbAnimation(true);
      setThumbIndex(thumbIndex + 1);
    }
  };

  const slidePrev = () => {
    if (!thumbAnimation && thumbIndex > 0) {
      setThumbAnimation(true);
      setThumbIndex(thumbIndex - 1);
    }
  };

  const syncMainBeforeChange = () => {
    setMainAnimation(true);
  };

  const syncMainAfterChange = (e) => {
    setMainAnimation(false);

    if (e.type === "action") {
      setThumbIndex(e.item);
      setThumbAnimation(false);
    } else {
      setMainIndex(thumbIndex);
    }
  };

  const syncThumbs = (e) => {
    setThumbIndex(e.item);
    setThumbAnimation(false);

    if (!mainAnimation) {
      setMainIndex(e.item);
    }
  };

  return (
    <div>
      <div className="relative">
        <AliceCarousel
          activeIndex={mainIndex}
          animationType="fadeout"
          animationDuration={800}
          disableDotsControls
          disableButtonsControls
          items={items}
          mouseTracking={!thumbAnimation}
          onSlideChange={syncMainBeforeChange}
          onSlideChanged={syncMainAfterChange}
          touchTracking={!thumbAnimation}
        />
        <img
          src={leftArrow}
          alt=""
          onClick={slidePrev}
          className="hidden sm:block cursor-pointer absolute -left-24 xl:-left-32 top-2/4 -translate-y-2/4 "
        />
        <img
          src={rightArrow}
          alt=""
          onClick={slideNext}
          className="hidden sm:block cursor-pointer absolute -right-24 xl:-right-32 top-2/4 -translate-y-2/4 "
        />
      </div>
      <div className="thumbs mt-2 md:mt-4 lg:mt-8 xl:mt-10">
        <AliceCarousel
          activeIndex={thumbIndex}
          autoWidth
          disableDotsControls
          disableButtonsControls
          items={thumbs}
          mouseTracking={true}
          onSlideChanged={syncThumbs}
          touchTracking={!mainAnimation}
        />
      </div>
    </div>
  );
}
