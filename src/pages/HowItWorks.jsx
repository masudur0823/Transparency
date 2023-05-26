import { useState } from "react";
import img from "../assets/images/descImage.png";
import SectionHeader from "../components/SectionHeader";
import SectionMainLayout from "../components/SectionMainLayout";
import buttonsImg from "../assets/images/howitworks/text_editorIcons.svg";
import textareaImg from "../assets/images/howitworks/textareaHoverImage.png";
import buttons_image from "../assets/images/howitworks/buttons_image.png";
import optionlistImg1 from "../assets/images/howitworks/optionlistImg1.png";
import smartCar from "../assets/images/icons/smartcar.svg";
import leftArrow from "../assets/images/slider/leftarrow.svg";
import rightArrow from "../assets/images/slider/rightArrow.svg";
import optionlistImg2 from "../assets/images/howitworks/optionlistImg2.png";
import optionlistImg2_mobile from "../assets/images/howitworks/optionlistImg1_mobile.png";

export default function HowItWorks() {
  const [text, setText] = useState(
    "Offrez-vous cette magnifique Mercedes-Benz Classe A de 2020 ! Avec seulement 66500 km au compteur, cette voiture citadine est en excellent état et prête à vous emmener où vous voulez. Sa couleur gris élégante attire tous les regards et son intérieur spacieux peut accueillir jusqu'à 5 passagers. Cette Classe A est équipée d'une boîte de vitesse manuelle et fonctionne à l'essence, ce qui la rend économique et écologique. Elle est également très puissante, avec une puissance fiscale de 6 Cv et une puissance DIN de 136 Ch, ce qui vous permet de conduire en toute sécurité et de dépasser les autres voitures sur la route. Le moteur de cette Mercedes-Benz Classe A est facile à démarrer, ce qui est un atout supplémentaire pour vous. Vous apprécierez son confort de conduite et ses nombreuses fonctionnalités…."
  );
  const [display, setDisplay] = useState("hidden");
  const [displayBtnImg, setDisplayBtnImg] = useState("hidden");
  const [displayOptionList, setDisplayOptionList] = useState("hidden");
  return (
    <div>
      <SectionMainLayout>
        <SectionHeader title="How it works" />
        <div className="container mx-auto mt-4 md:mt-10 mb-96">
          {/* <img src={img1} alt="" className="w-full" /> */}
          <div className="grid grid-cols-[1fr] lg:grid-cols-[7fr_5fr] gap-4">
            {/* text Editor */}
            <div
              id="textarea"
              className="bg-my_grey pt-3 md:pt-8 pb-3 px-3 lg:px-5 xl:px-8 rounded-xl relative"
            >
              <div className="relative">
                <textarea
                  name="w3review"
                  className={`resize-none text-area w-full h-64 md:h-96 hover:bg-yellow3 p-3 border-2 hover:border-my_orange rounded-xl`}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  onMouseOver={() => setDisplay("block")}
                  onMouseOut={() => setDisplay("hidden")}
                />
                <img
                  src={textareaImg}
                  alt=""
                  className={`${display} z-10 absolute right-0`}
                />
                {displayOptionList === "block" && (
                  <img
                    src={optionlistImg2}
                    className="z-10 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
                    alt=""
                  />
                )}
              </div>

              {/* buttons */}
              <div className="flex gap-3 mt-2 relative">
                <img
                  src={buttonsImg}
                  onMouseOver={() => setDisplayBtnImg("block")}
                  onMouseOut={() => setDisplayBtnImg("hidden")}
                  className="hover:bg-yellow3 p-3 border-2 hover:border-my_orange border-transparent rounded-xl"
                  alt=""
                />
                <img
                  src={buttons_image}
                  className={`${displayBtnImg} z-20 absolute top-14 left-0`}
                  alt="buttons_image"
                />
              </div>
            </div>
            {/* text Editor */}
            <div className="flex flex-col gap-3">
              <UploadImage />
              <div
                onMouseOver={() => {
                  setDisplayOptionList("block"), setText("");
                }}
                onMouseOut={() => {
                  setDisplayOptionList("hidden");
                  setText(
                    "Offrez-vous cette magnifique Mercedes-Benz Classe A de 2020 ! Avec seulement 66500 km au compteur, cette voiture citadine est en excellent état et prête à vous emmener où vous voulez. Sa couleur gris élégante attire tous les regards et son intérieur spacieux peut accueillir jusqu'à 5 passagers. Cette Classe A est équipée d'une boîte de vitesse manuelle et fonctionne à l'essence, ce qui la rend économique et écologique. Elle est également très puissante, avec une puissance fiscale de 6 Cv et une puissance DIN de 136 Ch, ce qui vous permet de conduire en toute sécurité et de dépasser les autres voitures sur la route. Le moteur de cette Mercedes-Benz Classe A est facile à démarrer, ce qui est un atout supplémentaire pour vous. Vous apprécierez son confort de conduite et ses nombreuses fonctionnalités…."
                  );
                }}
                className="bg-my_grey hover:bg-yellow3 p-2 rounded-xl h-44 lg:h-1/3 hover:border-my_orange border-2 border-transparent"
              >
                <p className="font-medium mb-4">Option List</p>
                <div className="relative">
                  <div className="w-52 mx-auto">
                    <div className="item px-3 py-2 bg-white border border-my_grey8 rounded-lg flex items-center gap-3">
                      <div className="h-9 w-9 p-2 rounded-lg bg-my_grey2">
                        <img src={smartCar} className="w-full" alt="smartCar" />
                      </div>
                      Performance1
                    </div>
                    <img
                      src={leftArrow}
                      alt=""
                      className=" cursor-pointer w-7 sm:w-10 h-7 sm:h-10 absolute left-0 top-3"
                    />
                    <img
                      src={rightArrow}
                      alt=""
                      className=" cursor-pointer  w-7 sm:w-10 h-7 sm:h-10 absolute right-0 top-3"
                    />
                  </div>
                  <div className="hidden md:block">
                    <img
                      src={optionlistImg1}
                      className={`${displayOptionList} z-10 absolute -left-3/4 top-32`}
                      alt=""
                    />
                  </div>
                  <div className="block md:hidden">
                    <img
                      src={optionlistImg2_mobile}
                      className={`${displayOptionList} z-10 absolute left-1/2 -translate-x-1/2 top-36`}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionMainLayout>
    </div>
  );
}

function UploadImage() {
  return (
    <>
      <div className="border-2 border-dashed p-4 h-2/3 rounded-xl">
        <div className="h-full flex flex-col items-start justify-center">
          <div className="w-full rounded-xl overflow-hidden relative">
            <img
              src={img}
              alt={"img"}
              className="w-full h-32 md:h-48 object-cover rounded-xl"
            />
          </div>
          <div className="mt-4 bg-my_grey5 p-3 rounded-2xl w-full">
            <div className="flex justify-between text-my_black font-semibold">
              <p>Mercedes Class A</p>
              <p>25000 $</p>
            </div>
            <div className="flex justify-between text-my_black">
              <p>17000km</p>
              <p>Location : Paris</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
