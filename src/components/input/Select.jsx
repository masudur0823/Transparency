import { useEffect, useRef, useState } from "react";

function Select({
  label,
  icon,
  children,
  value,
  onChange,
  labelIcon,
  epaList,
  epa,
}) {
  const ref = useRef(null);
  const [show, setShow] = useState("hidden");
  const handleIconClick = () => {
    if (show === "hidden") {
      setShow("block");
    } else return setShow("hidden");
  };
  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (!ref.current || !ref.current.contains(event.target)) {
        setShow("hidden");
      }
    });
  }, []);
  return (
    <div className="flex items-center gap-5">
      <div className="h-7 md:h-10 w-7 md:w-10 bg-my_grey2 flex justify-center items-center rounded-full p-2 md:p-2.5">
        <img src={icon} alt="" className="w-full h-full" />
      </div>
      <div className="flex flex-col gap-1">
        <div className={`flex items-center justify-between gap-2`} ref={ref}>
          <label htmlFor={label} className="text-my_light_text text-sm">
            {label}
          </label>
          {epa && (
            <div className="relative">
              <span onClick={handleIconClick} className="cursor-pointer">
                {labelIcon}
              </span>

              <ul
                className={`${show} absolute top-5 -left-48 w-56 md:w-96 bg-white shadow p-2 text-xs`}
              >
                {epaList.map((item, index) => (
                  <li key={index}>
                    <b>{item.title}:</b> {item.desc}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <select
          name=""
          id=""
          value={value}
          onChange={onChange}
          className="cursor-pointer text-my_black font-semibold w-44"
        >
          {children}
        </select>
      </div>
    </div>
  );
}

export default Select;
