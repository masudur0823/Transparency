import { useState } from "react";
import ImageSlider from "../components/ImageSlider";
import SectionHeader from "../components/SectionHeader";
import SectionMainLayout from "../components/SectionMainLayout";
import TextEditor from "../components/TextEditor";
import imageUpload from "../assets/images/icons/imageUpload.svg";
import setting2_white from "../assets/images/icons/setting2_white.svg";
import setting2_black from "../assets/images/icons/setting2_black.svg";
import health_black from "../assets/images/icons/health_black.svg";
import health_white from "../assets/images/icons/health_white.svg";
import info_b from "../assets/images/icons/infocircle_black.svg";
import info_w from "../assets/images/icons/infocircle_w.svg";
import eye_b from "../assets/images/icons//eye_black.svg";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeIndex1, setActiveIndex1] = useState(0);
  const handleIndex = (index) => {
    setActiveIndex(index);
  };
  const handleIndex1 = (index) => {
    setActiveIndex1(index);
  };
  return (
    <>
      <div
        style={{
          background:
            "linear-gradient(99.9deg, #F2EBC9 4.3%, rgba(206, 227, 144, 0.1) 111.37%)",
        }}
      >
        <SectionMainLayout>
          <div className="conatiner mx-auto px-4 w-full sm:w-3/5">
            <SectionHeader title="Provide precise details about cars and enable transparent transactions" />
            <h4 className="text-base md:text-2xl font-medium text-center my-2 md:my-6">
              Sell your used car with full transparency
            </h4>
            <ImageSlider />
          </div>
        </SectionMainLayout>
      </div>
      <SectionMainLayout>
        <div className="container mx-auto px-4">
          <SectionHeader title="Fill in your car details" />

          <div className="flex flex-col sm:flex-row gap-4 justify-between my-3 md:my-5">
            <div className="flex gap-3 md:gap-8 font-medium">
              <p
                onClick={() => handleIndex(0)}
                className={
                  activeIndex === 0
                    ? "text-base text-my_black cursor-pointer relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-my_orange"
                    : "text-base text-placeholder cursor-pointer"
                }
              >
                Home
              </p>
              <p
                onClick={() => handleIndex(1)}
                className={
                  activeIndex === 1
                    ? "text-base text-my_black cursor-pointer relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-my_orange"
                    : "text-base text-placeholder cursor-pointer"
                }
              >
                My Description
              </p>
            </div>
            <p className="text-my_orange cursor-pointer">Add New Description</p>
          </div>

          <div className={activeIndex === 0 ? "block" : "hidden"}>
            <div className="grid grid-cols-[1fr] lg:grid-cols-[7fr_5fr] gap-4">
              <TextEditor />
              <div className="flex flex-col gap-3">
                <UploadImgae />
                <div className="bg-my_grey p-2 rounded-xl h-1/3">
                  <p className="font-medium">Option List</p>
                </div>
              </div>
            </div>
          </div>
          <div className={activeIndex === 1 ? "block" : "hidden"}>2</div>
        </div>
      </SectionMainLayout>

      <SectionMainLayout bg_color="bg-my_light_yellow">
        <div className="container mx-auto px-4">
          {/* tabs start */}
          <div className="flex justify-between">
            <div className="flex items-center gap-3">
              <span
                className={
                  activeIndex1 === 0
                    ? "font-medium text-white bg-my_black2 p-5 rounded-lg cursor-pointer flex gap-2 whitespace-nowrap"
                    : "font-medium text-my_black3 bg-white p-5 rounded-lg cursor-pointer flex gap-2 whitespace-nowrap"
                }
                onClick={() => handleIndex1(0)}
              >
                <img
                  src={activeIndex1 === 0 ? setting2_white : setting2_black}
                  alt=""
                />{" "}
                Characteristics
              </span>
              <span
                className={
                  activeIndex1 === 1
                    ? "font-medium text-white bg-my_black2 p-5 rounded-lg cursor-pointer flex gap-2 whitespace-nowrap"
                    : "font-medium text-my_black3 bg-white p-5 rounded-lg cursor-pointer flex gap-2 whitespace-nowrap"
                }
                onClick={() => handleIndex1(1)}
              >
                <img
                  src={activeIndex1 === 1 ? health_white : health_black}
                  alt=""
                />{" "}
                General conditions
              </span>
              <span
                className={
                  activeIndex1 === 2
                    ? "font-medium text-white bg-my_black2 p-5 rounded-lg cursor-pointer flex gap-2 whitespace-nowrap"
                    : "font-medium text-my_black3 bg-white p-5 rounded-lg cursor-pointer flex gap-2 whitespace-nowrap"
                }
                onClick={() => handleIndex1(2)}
              >
                <img src={activeIndex1 === 2 ? info_w : info_b} alt="" /> Other
                information
              </span>
            </div>
            <span className=" bg-white p-5 rounded-lg cursor-pointer">
              <img src={eye_b} alt="" />
            </span>
          </div>
          {/* tabs end */}
        </div>
      </SectionMainLayout>
    </>
  );
}

function UploadImgae() {
  const [image, setImage] = useState(null);
  return (
    <>
      <div className="border-2 border-dashed p-4 h-2/3 rounded-xl">
        {!image && (
          <div className="h-full flex items-center justify-center  overflow-hidden relative">
            <div className="text-center">
              <img src={imageUpload} className="m-auto" alt="" />
              <p style={{ color: "#828282" }} className="text-sm mt-2">
                Drop your images or
              </p>
              <p className="text-blue-600 text-sm">click to browse</p>
            </div>
            <input
              type="file"
              accept="image/png, image/jpeg"
              onChange={(event) => setImage(event.target.files[0])}
              className="absolute w-full h-full opacity-0 cursor-pointer"
            />
          </div>
        )}
        {image && (
          <div className="h-full flex items-center justify-center rounded-xl overflow-hidden relative">
            <img
              src={image ? URL.createObjectURL(image) : ""}
              alt={""}
              className="w-full h-42 object-fill rounded-xl"
            />
          </div>
        )}
      </div>
    </>
  );
}
