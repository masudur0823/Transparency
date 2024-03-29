// import { useState } from "react";
import Accordion from "../components/Accordion";
import SectionHeader from "../components/SectionHeader";
import SectionMainLayout from "../components/SectionMainLayout";
import { faqsList } from "../data/FaqsDataset";

export default function Faqs() {
  // const [activeIndex, setActiveIndex] = useState(0);
  // const handleIndex = (index) => {
  //   setActiveIndex(index);
  // };
 
  return (
    <div
      style={{
        background:
          "linear-gradient(99.9deg, #F2EBC9 4.3%, rgba(206, 227, 144, 0.1) 111.37%)",
      }}
    >
      <SectionMainLayout>
        <div className="container mx-auto px-4">
          <SectionHeader title="Frequently Asked Questions" />
          <p className="text-xl font-medium text-center mt-2 mb-6 md:mb-10 ">
            All the answers in one place
          </p>
          {/* tabs */}
          {/* <div className="my-5 md:mb-10 w-full md:w-1/2 mx-auto flex items-center gap-3">
            <span
              className={
                activeIndex === 0
                  ? "w-full font-medium text-white bg-my_black2 p-2 md:p-5 rounded-lg cursor-pointer flex gap-2 whitespace-nowrap"
                  : "w-full font-medium text-my_black3 bg-white p-2 md:p-5 rounded-lg cursor-pointer flex gap-2 whitespace-nowrap"
              }
              onClick={() => handleIndex(0)}
            >
              
              Financing
            </span>
            <span
              className={
                activeIndex === 1
                  ? "w-full font-medium text-white bg-my_black2 p-2 md:p-5 rounded-lg cursor-pointer flex gap-2 whitespace-nowrap"
                  : "w-full font-medium text-my_black3 bg-white p-2 md:p-5 rounded-lg cursor-pointer flex gap-2 whitespace-nowrap"
              }
              onClick={() => handleIndex(1)}
            >
              
              Delivery
            </span>
            <span
              className={
                activeIndex === 2
                  ? "w-full font-medium text-white bg-my_black2 p-2 md:p-5 rounded-lg cursor-pointer flex gap-2 whitespace-nowrap"
                  : "w-full font-medium text-my_black3 bg-white p-2 md:p-5 rounded-lg cursor-pointer flex gap-2 whitespace-nowrap"
              }
              onClick={() => handleIndex(2)}
            >
              Deposit
            </span>
          </div> */}
          {/* tabs */}
          <Accordion items={faqsList} />
        </div>
      </SectionMainLayout>
    </div>
  );
}
