function Button({ text , onClick,fullwidth, login}) {
  return (
    <button className={`px-12 py-3 bg-yellow rounded-md font-semibold ${login ? "text-my_black4": "text-my_black"} ${fullwidth && "w-full"}`} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
