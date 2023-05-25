function Select({ label, icon, children, value, onChange }) {
  return (
    <div className="flex items-center gap-5">
      <div className="h-8 md:h-10 w-8 md:w-10 bg-my_grey2 flex justify-center items-center rounded-full">
        <img src={icon} alt="" className="w-3 md:w-5" />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor={label} className="text-my_light_text text-sm">
          {label}
        </label>
        <select name="" id="" value={value} onChange={onChange} className="text-my_grey3" >
            {children}
        </select>
      </div>
    </div>
  );
}

export default Select;
