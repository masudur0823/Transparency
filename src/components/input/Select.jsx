function Select({ label, icon, children, value, onChange }) {
  return (
    <div className="flex items-center gap-5">
      <div className="h-7 md:h-10 w-7 md:w-10 bg-my_grey2 flex justify-center items-center rounded-full p-2 md:p-2.5" >
        <img src={icon} alt="" className="w-full h-full" />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor={label} className="text-my_light_text text-sm">
          {label}
        </label>
        <select name="" id="" value={value} onChange={onChange} className="text-my_black font-semibold" >
            {children}
        </select>
      </div>
    </div>
  );
}

export default Select;
