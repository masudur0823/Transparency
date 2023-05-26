/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo } from "react";
import img from "../assets/images/descImage.png";
function MyDescription({ filterSearch }) {
  const descList = [
    {
      img: img,
      name: "Mercedes Class A",
      price: 20000,
      speed: 17000,
      location: "Paris",
    },
    {
      img: img,
      name: "Mercedes Class B",
      speed: 18000,
      price: 21000,
      location: "London",
    },
    {
      img: img,
      name: "Mercedes Class C",
      speed: 19000,
      price: 22000,
      location: "turki",
    },
    {
      img: img,
      name: "Mercedes Class C",
      speed: 20000,
      price: 23000,
      location: "Bangladesh",
    },
    {
      img: img,
      name: "Mercedes Class C",
      speed: 21000,
      price: 24000,
      location: "Pakistan",
    },
    {
      img: img,
      name: "Mercedes Class C",
      speed: 22000,
      price: 25000,
      location: "Inodnesia",
    },
  ];

  const DescriptionControl = useMemo(() => {
    return descList.map((item, index) => {
      if (
        item.name.toLowerCase().indexOf(filterSearch.toLowerCase()) === -1 &&
        item.speed.toString().toLowerCase().indexOf(filterSearch.toLowerCase()) === -1 &&
        item.price.toString().toLowerCase().indexOf(filterSearch.toLowerCase()) === -1 &&
        item.location.toLowerCase().indexOf(filterSearch.toLowerCase()) === -1
      ) {
        return;
      }
      return (
        <div
          key={index}
          className="border border-dashed p-2 md:p-3 rounded-2xl"
        >
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
              <p>{item.speed} km</p>
              <p>Location: {item.location}</p>
            </div>
          </div>
        </div>
      );
    });
  }, [descList]);

  return (
    <div className="grid grid-cols-[1fr] md:grid-cols-[1fr_1fr] gap-2 md:gap-5">
      {DescriptionControl}
    </div>
  );
}

export default MyDescription;
