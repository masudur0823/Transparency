import { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import OutsideDetect from "../../utils/OutsideDetect";

export default function SelectColor({ label, icon, state, setState, data }) {
  const [showMenu, setShowMenu] = useState("hidden");
  const handleClick = () => {
    if (showMenu === "hidden") {
      setShowMenu("block");
    } else {
      setShowMenu("hidden");
    }
  };
  useEffect(() => {
    setState("Black");
  }, []);

  return (
    <div className="flex items-center gap-5">
      <div className="h-7 md:h-10 w-7 md:w-10 bg-my_grey2 flex justify-center items-center rounded-full p-2 md:p-2.5">
        <img src={icon} alt="" className="w-full h-full" />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor={label} className="text-my_light_text text-sm">
          {label}
        </label>
        <OutsideDetect setShow={setShowMenu}>
          <div
            className="relative text-my_black font-semibold w-44 cursor-pointer flex justify-between items-center"
            onClick={handleClick}
          >
            <div className="">{state}</div>
            <MdKeyboardArrowDown />

            <div
              className={`top-7 left-0 absolute shadow-md ${showMenu} bg-white h-44 w-44 overflow-y-scroll customSelect`}
            >
              {data.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setState(item)}
                  className="py-1 px-2 cursor-pointer hover:bg-blue-600 hover:text-white"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </OutsideDetect>
      </div>
    </div>
  );
}
