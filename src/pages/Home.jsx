import { useState } from "react";
import ImageSlider from "../components/ImageSlider";
import SectionHeader from "../components/SectionHeader";
import SectionMainLayout from "../components/SectionMainLayout";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleIndex = (index) => {
    setActiveIndex(index);
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

          <div className={activeIndex === 0 ? "flex" : "hidden"}>1</div>
          <div className={activeIndex === 1 ? "flex" : "hidden"}>2</div>
        </div>
      </SectionMainLayout>
    </>
  );
}
