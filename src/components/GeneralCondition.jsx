import img1 from "../assets/images/suspension.png";
import img2 from "../assets/images/car-engine.png";
import img3 from "../assets/images/automatic-transmission.png";
import img4 from "../assets/images/racing.png";
import img5 from "../assets/images/seat.png";
import img6 from "../assets/images/tires.png";
import img7 from "../assets/images/brake-disc.png";
import infoIcon from "../assets/images/icons/infocircle.svg";
import Button from "./Button";
import btnIcon from "../assets/images/form_icons/edit2.svg"
import { useEffect, useState } from "react";
import WheelCarrosal from "./WheelCarrosal";
import {
  motorList,
  motorListDesc,
  outsideList,
  outsideDesc,
  tiresList,
  tiresDesc,
  transmissionList,
  transmissionDesc,
  insideList,
  insideDesc,
  suspensionList,
  suspensionDesc,
  brakesList,
  brakesDesc
} from "../data/GeneralConditions";

function GeneralCondition() {
  // slides active index
  const [activeIndex, setActiveIndex] = useState(null);
  // slides active index
  const [activeText, setActiveText] = useState("Motor");
  const [title, setTitle] = useState([]);
  const [desc, setDesc] = useState([]);

  const handleClick = (text) => {
    setActiveText(activeText === text ? null : text);
  };

  useEffect(() => {
    if (activeText === "Motor") {
      setTitle(motorList);
      setDesc(motorListDesc);
    }
    if (activeText === "Outside") {
      setTitle(outsideList);
      setDesc(outsideDesc);
    }
    if (activeText === "Tires") {
      setTitle(tiresList);
      setDesc(tiresDesc);
    }
    if (activeText === "Transmission") {
      setTitle(transmissionList);
      setDesc(transmissionDesc);
    }
    if (activeText === "Inside") {
      setTitle(insideList);
      setDesc(insideDesc);
    }
    if (activeText === "Suspension") {
      setTitle(suspensionList);
      setDesc(suspensionDesc);
    }
    if (activeText === "Brakes") {
      setTitle(brakesList);
      setDesc(brakesDesc);
    }
  }, [activeText]);

  const handleSubmit = () => {
    alert(activeText);
  };

  return (
    <>
      <div className=" p-4 bg-white mt-8 rounded-lg relative">
        {/* quick Tip */}
        <div className="p-3 bg-my_grey2 w-44 my-5 lg:my-0 rounded-lg z-10 static lg:absolute top-10 right-10 mx-auto">
          <p className="font-semibold flex gap-2">
            <img src={infoIcon} alt="" /> Quick Tip
          </p>
          <p className="text-my_light_text text-sm mt-2">
            <QuicTipDescription descList={desc} activeIndex={activeIndex} />
          </p>
        </div>
        <div className="w-60 md:w-120 h-60 md:h-120 rounded-full border border-dashed mx-auto m-10 relative">
          <div className="absolute -top-7 md:-top-10 left-1/2 -translate-x-1/2">
            <button
              disabled={activeText === "Suspension" ? true : false}
              className={
                activeText === "Suspension" ? "opacity-100" : "opacity-30"
              }
              onClick={() => handleClick("Suspension")}
            >
              <img className="m-auto w-1/2 md:w-auto" src={img1} alt="" />
              <p
                className={`font-medium text-xs md:text-base ${
                  activeText === "Suspension" ? "border-s-4  border-yellow" : ""
                } ps-2`}
              >
                Suspension
              </p>
            </button>
          </div>
          <div className="absolute top-[10%] md:top-[18%] -left-2 md:-left-6">
            <button
              disabled={activeText === "Motor" ? true : false}
              className={activeText === "Motor" ? "opacity-100" : "opacity-30"}
              onClick={() => handleClick("Motor")}
            >
              <img className="m-auto w-1/2 md:w-auto" src={img2} alt="" />
              <p
                className={`font-medium text-xs md:text-base ${
                  activeText === "Motor" ? "border-s-4  border-yellow" : ""
                } ps-2`}
              >
                Motor
              </p>
            </button>
          </div>
          <div className="absolute top-[10%] md:top-[18%] -right-2 md:-right-6">
            <button
              disabled={activeText === "Transmission" ? true : false}
              className={
                activeText === "Transmission" ? "opacity-100" : "opacity-30"
              }
              onClick={() => handleClick("Transmission")}
            >
              <img className="m-auto w-1/2 md:w-auto" src={img3} alt="" />
              <p
                className={`font-medium text-xs md:text-base ${
                  activeText === "Transmission"
                    ? "border-s-4  border-yellow"
                    : ""
                } ps-2`}
              >
                Transmission
              </p>
            </button>
          </div>
          <div className="absolute top-[50%] -left-6 md:-left-10">
            <button
              disabled={activeText === "Outside" ? true : false}
              className={
                activeText === "Outside" ? "opacity-100" : "opacity-30"
              }
              onClick={() => handleClick("Outside")}
            >
              <img className="m-auto w-1/2 md:w-auto" src={img4} alt="" />
              <p
                className={`font-medium text-xs md:text-base ${
                  activeText === "Outside" ? "border-s-4  border-yellow" : ""
                } ps-2`}
              >
                Outside
              </p>
            </button>
          </div>
          <div className="absolute top-[50%] -right-6 md:-right-10">
            <button
              disabled={activeText === "Inside" ? true : false}
              className={
                activeText === "Inside" ? "opacity-100" : "opacity-30"
              }
              onClick={() => handleClick("Inside")}
            >
              <img className="m-auto w-1/2 md:w-auto" src={img5} alt="" />
              <p
                className={`font-medium text-xs md:text-base ${
                  activeText === "Inside" ? "border-s-4  border-yellow" : ""
                } ps-2`}
              >
                Inside
              </p>
            </button>
          </div>
          <div className="absolute top-[80%] left-5 md:left-10">
            <button
              disabled={activeText === "Tires" ? true : false}
              className={activeText === "Tires" ? "opacity-100" : "opacity-30"}
              onClick={() => handleClick("Tires")}
            >
              <img className="m-auto w-1/2 md:w-auto" src={img6} alt="" />
              <p
                className={`font-medium text-xs md:text-base ${
                  activeText === "Tires" ? "border-s-4  border-yellow" : ""
                } ps-2`}
              >
                Tires
              </p>
            </button>
          </div>
          <div className="absolute top-[80%] right-5 md:right-10">
            <button
              disabled={activeText === "Brakes" ? true : false}
              className={activeText === "Brakes" ? "opacity-100" : "opacity-30"}
              onClick={() => handleClick("Brakes")}
            >
              <img className="m-auto w-1/2 md:w-auto" src={img7} alt="" />
              <p
                className={`font-medium text-xs md:text-base ${
                  activeText === "Brakes" ? "border-s-4  border-yellow" : ""
                } ps-2`}
              >
                Brakes
              </p>
            </button>
          </div>
          {/* middle */}
          <div className="w-24 md:w-44 h-10 md:h-20 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs md:text-base whitespace-nowrap font-semibold">
            <WheelCarrosal setActiveIndex={setActiveIndex} slides={title} />
          </div>
        </div>
      </div>
      <div className="mt-3 md:mt-8">
        <Button rounded labelIcon={btnIcon} text="Launch" onClick={handleSubmit} />
      </div>
    </>
  );
}

export default GeneralCondition;

function QuicTipDescription({ descList, activeIndex }) {
  return (
    <>
      {descList.map((item, index) => {
        if (activeIndex === index) {
          return <p key={index}>{item}</p>;
        }
      })}
    </>
  );
}
