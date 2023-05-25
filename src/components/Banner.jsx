function Banner({ img }) {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(99.9deg, #737270 4.3%, rgba(81, 75, 22, 0.1) 111.37%),url("${img}")`,
      }}
      className="h-36 sm:h-44 md:h-64 lg:h-96 xl:h-122 bg-no-repeat bg-cover bg-center bg-blend-multiply"
    ></div>
  );
}

export default Banner;
