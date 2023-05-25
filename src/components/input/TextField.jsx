function TextField({
  type,
  label,
  icon,
  value,
  placeholder,
  loginBorder,
  fullwidth,
  login,
  onChange,
}) {
  return (
    <div className={` ${login ? "mt-2" : "flex"} items-center justify-start gap-3 md:gap-5`}>
      {icon && (
        <div className="h-7 md:h-10 w-7 md:w-10 bg-my_grey2 flex justify-center items-center rounded-full p-2">
          <img src={icon} alt="" className="w-full" />
        </div>
      )}
      <div className={`flex flex-col gap-2`}>
        <label htmlFor={label} className="text-my_light_text text-sm">
          {label}
        </label>
        <input
          type={type}
          name={label}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`${
            loginBorder ? "px-4 py-3" : "px-2 py-1"
          } box-border border border-solid ${
            loginBorder ? "border-my_grey7" : " border-input_border_color"
          } rounded ${fullwidth ? "w-full" : "w-full md:w-60"} font-bold`}
        />
      </div>
    </div>
  );
}

export default TextField;
