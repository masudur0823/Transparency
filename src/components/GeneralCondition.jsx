import img1 from "../assets/images/suspension.png";
import img2 from "../assets/images/car-engine.png";
import img3 from "../assets/images/automatic-transmission.png";
import img4 from "../assets/images/racing.png";
import img5 from "../assets/images/seat.png";
import img6 from "../assets/images/tires.png";
import img7 from "../assets/images/brake-disc.png";
import Button from "./Button";
function GeneralCondition() {
  const handleSubmit = () => {
    alert("hi");
  };
  return (
    <>
      <div className=" p-4 bg-white mt-8 rounded-lg">
        <div className="w-60 md:w-120 h-60 md:h-120 rounded-full border border-dashed mx-auto m-10 relative">
          <div className="absolute -top-7 md:-top-10 left-1/2 -translate-x-1/2">
            <div className="cursor-pointer">
              <img className="m-auto w-1/2 md:w-auto" src={img1} alt="" />
              <p className="font-medium text-xs md:text-base">Suspension</p>
            </div>
          </div>
          <div className="absolute top-[10%] md:top-[18%] -left-2 md:-left-6">
            <div className="cursor-pointer">
              <img className="m-auto w-1/2 md:w-auto" src={img2} alt="" />
              <p className="font-medium text-xs md:text-base">Monteur</p>
            </div>
          </div>
          <div className="absolute top-[10%] md:top-[18%] -right-2 md:-right-6">
            <div className="cursor-pointer">
              <img className="m-auto w-1/2 md:w-auto" src={img3} alt="" />
              <p className="font-medium text-xs md:text-base">Transmission</p>
            </div>
          </div>
          <div className="absolute top-[50%] -left-6 md:-left-10">
            <div className="cursor-pointer">
              <img className="m-auto w-1/2 md:w-auto" src={img4} alt="" />
              <p className="font-medium text-xs md:text-base">Exterieur</p>
            </div>
          </div>
          <div className="absolute top-[50%] -right-6 md:-right-10">
            <div className="cursor-pointer">
              <img className="m-auto w-1/2 md:w-auto" src={img5} alt="" />
              <p className="font-medium text-xs md:text-base">Interieur</p>
            </div>
          </div>
          <div className="absolute top-[80%] left-5 md:left-10">
            <div className="cursor-pointer">
              <img className="m-auto w-1/2 md:w-auto" src={img6} alt="" />
              <p className="font-medium text-xs md:text-base">Pneus</p>
            </div>
          </div>
          <div className="absolute top-[80%] right-5 md:right-10">
            <div className="cursor-pointer">
              <img className="m-auto w-1/2 md:w-auto" src={img7} alt="" />
              <p className="font-medium text-xs md:text-base">Friens</p>
            </div>
          </div>
          {/* middle */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold">
            <p className="text-my_grey4">Vibration</p>
            <p className="flex items-center gap-2">
              Demarrage Facile{" "}
              <div className="w-4 h-4 bg-yellow rounded-full outline outline-2 outline-black border-2 border-white"></div>
            </p>
            <p className="text-my_grey4">Fume</p>
          </div>
        </div>
      </div>
      <div className="mt-3 md:mt-8">
        <Button text="Launch" onClick={handleSubmit} />
      </div>
    </>
  );
}

export default GeneralCondition;
