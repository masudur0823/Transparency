import logo from "../assets/images/logo.svg";
import Navigation from "./Navigation";
import people from "../assets/images/icons/people.svg";
import SelectLanguage from "./Select/SelectLanguage";
import { HiMenuAlt1 } from "react-icons/hi";
import { useState } from "react";

export default function Header() {
  const [show, setShow] = useState("-1000px");

  const handleMenu = () => {
    if (show === "-1000px") {
      setShow("42px");
    } else setShow("-1000px");
  };
  return (
    <div className="header_main flex items-center h-11 md:h-20">
      <div className="container mx-auto px-2">
        <div className="flex gap-5 justify-between">
          <img src={logo} alt="" className="w-24 lg:w-auto" />
          <div className="flex justify-between w-48 md:w-full ">
            <div
              style={{ top: show }}
              className={`block md:hidden absolute md:relative right-4 md:right-0 top-11 md:top-0 bg-none md:bg-white shadow md:shadow-none p-3 md:p-0`}
            >
              <Navigation setshow={setShow} mobile />
            </div>
            <div className="hidden md:block">
              <Navigation desktop />
            </div>
            <div className="flex gap-2 xl:gap-6 items-center">
              <SelectLanguage />
              <button>
                <img src={people} alt="" />
              </button>
            </div>
            <button className="block md:hidden" onClick={handleMenu}>
              <HiMenuAlt1 />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
