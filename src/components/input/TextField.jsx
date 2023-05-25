function TextField({type,label,icon}) {
  return (
    <div className="flex items-center gap-3 md:gap-5">
      <div className="h-8 md:h-10 w-8 md:w-10 bg-my_grey2 flex justify-center items-center rounded-full">
        <img src={icon} alt="" className="w-3 md:w-5" />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor={label} className="text-my_light_text text-sm">{label}</label>
        <input type={type} name={label} className="px-2 py-1 box-border border border-input_border_color rounded w-full md:w-60" />
      </div>
    </div>
  );
}

export default TextField;
