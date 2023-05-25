import  { useState } from 'react';
import plus from "../assets/images/icons/accordian_plus.svg"
import minus from "../assets/images/icons/accordian_minus.svg"

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div
          className={`border-b border-yellow2 cursor-pointer`}
          key={index}
        >
          <div className="flex justify-between py-2 md:py-5" onClick={() => toggleAccordion(index)}>
            <h3 className='text-base md:text-xl font-semibold select-none'>{item.title}</h3>
            {activeIndex !== index ? <img src={plus} alt="" /> : <img src={minus} alt="" />}
          </div>
          {activeIndex === index && (
            <div className="pb-5 md:pb-10">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
