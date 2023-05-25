import img from "../assets/images/descImage.png";
function MyDescription() {
  const descList = [
    {
      img: img,
      name: "Mercedes Class A",
      price: 25000,
      speed: 17000,
      location: "Paris",
    },
    {
      img: img,
      name: "Mercedes Class B",
      speed: 17000,
      price: 25000,
      location: "Paris",
    },
    {
      img: img,
      name: "Mercedes Class C",
      speed: 17000,
      price: 25000,
      location: "Paris",
    },
    {
        img: img,
        name: "Mercedes Class C",
        speed: 17000,
        price: 25000,
        location: "Paris",
      },
      {
        img: img,
        name: "Mercedes Class C",
        speed: 17000,
        price: 25000,
        location: "Paris",
      },
      {
        img: img,
        name: "Mercedes Class C",
        speed: 17000,
        price: 25000,
        location: "Paris",
      },
  ];
  return (
    <div className="grid grid-cols-[1fr] md:grid-cols-[1fr_1fr] gap-2 md:gap-5">
      {descList.map((item, index) => (
        <div key={index} className="border border-dashed p-2 md:p-3 rounded-2xl">
          <img
            src={item.img}
            alt={item.name}
            className="h-36 sm:h-40 md:h-48 lg:h-64 w-full object-cover rounded-xl"
          />
          <div className="mt-4 bg-my_grey5 p-3 rounded-2xl">
            <div className="flex justify-between text-my_black font-semibold">
              <p>{item.name}</p>
              <p>{item.price} $</p>
            </div>
            <div className="flex justify-between text-my_black">
              <p>{item.speed}</p>
              <p>{item.location} $</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MyDescription;
