import logo from "../assets/images/logo.svg";
import Navigation from "./Navigation";
import people from "../assets/images/icons/people.svg";
import SelectLanguage from "./Select/SelectLanguage";

export default function Header() {
  return (
    <div className="header_main flex items-center">
      <div className="container mx-auto px-2">
        <div className="flex gap-5">
          <img src={logo} alt="" className="w-24 lg:w-auto" />
          <div className="flex justify-between w-full">
            <Navigation />
            <div className="flex gap-2 items-center">
              <SelectLanguage />
              <button>
                <img src={people} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
