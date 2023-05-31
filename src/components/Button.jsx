function Button({ text , onClick,fullwidth, login,rounded,labelIcon}) {
  return (
    <button className={` bg-yellow ${rounded ? "rounded-full flex items-center gap-3 ps-6 pe-2 py-1": "rounded-md px-12 py-3" }  font-semibold ${rounded} ${login ? "text-my_black4": "text-my_black"} ${fullwidth && "w-full"}`} onClick={onClick}>
      {text}
      <img src={labelIcon} className="w-3/4" alt="" />
    </button>
  );
}

export default Button;
