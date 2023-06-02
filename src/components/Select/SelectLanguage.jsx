import eng from "../../assets/images/icons/englishCountry.svg";
import fr from "../../assets/images/icons/France (FR).svg";
import de from "../../assets/images/icons/Germany (DE).svg";
import it from "../../assets/images/icons/Italy (IT).svg";
import es from "../../assets/images/icons/Spain (ES).svg";
import pt from "../../assets/images/icons/Portugal (PT).svg";
import { RxCheckCircled, RxCircle } from "react-icons/rx";
import { useState } from "react";
import OutsideDetect from "../../utils/OutsideDetect";

export default function SelectLanguage() {
  const [showMenu, setShowMenu] = useState("hidden");
  const [value, setValue] = useState("ENGLISH");
  const [flag, setFlag] = useState(eng);
  const options = [
    {
      name: "ENGLISH",
      img: eng,
    },
    {
      name: "FRANÇAIS",
      img: fr,
    },
    {
      name: "DEUTSCH",
      img: de,
    },
    {
      name: "ITALIANO",
      img: it,
    },
    {
      name: "ESPAÑOL",
      img: es,
    },
    {
      name: "PORTUGUÉS",
      img: pt,
    },
  ];
  const handleClick = () => {
    if (showMenu === "hidden") {
      setShowMenu("block");
    } else {
      setShowMenu("hidden");
    }
  };

  return (
    <>
      <div className="border relative">
        <OutsideDetect setShow={setShowMenu}>
          <div
            style={{ background: "#FF6863" }}
            className="w-36 md:w-52 flex justify-between items-center gap-6 px-3 py-1 text-sm text-white cursor-pointer"
            onClick={handleClick}
          >
            <span className="text-xs lg:text-base">{value}</span>
            <div className="flex gap-2">
              <img src={flag} alt="ENGLISH" className="hidden md:block" />
              <RxCheckCircled fontSize={"20px"} />
            </div>
          </div>
          <div className={`z-10 absolute shadow-md ${showMenu} bg-white`}>
            {options.map((item, index) => (
              <div
                key={index}
                className="w-36 md:w-52 flex gap-6 px-3 py-1 text-sm justify-between items-center  cursor-pointer hover:bg-red-400 hover:text-white"
                onClick={() => {
                  setValue(item.name);
                  setFlag(item.img);
                  setShowMenu("hidden");
                }}
              >
                <span className="text-xs lg:text-base">{item.name}</span>
                <div className="flex gap-2">
                  <img
                    src={item.img}
                    alt="ENGLISH"
                    className="hidden md:block"
                  />
                  <RxCircle fontSize={"20px"} />
                </div>
              </div>
            ))}
          </div>
        </OutsideDetect>
      </div>
    </>
  );
}
