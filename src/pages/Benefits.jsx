import Banner from "../components/Banner";
import img from "../assets/images/benefits_banner.jpeg";
import SectionMainLayout from "../components/SectionMainLayout";
import SectionHeader from "../components/SectionHeader";
import messagequestion from "../assets/images/icons/messagequestion.svg";
import eye from "../assets/images/icons/eye-yellow.svg";
import flashcircle from "../assets/images/icons/flashcircle-yellow.svg";
import searchnormal1 from "../assets/images/icons/searchnormal1-yellow.svg";

export default function Benefits() {
  const chooseList = [
    {
      img: messagequestion,
      title: "Curiosity",
      desc: "No more confusion in the minds of potential buyers.",
    },
    {
      img: eye,
      title: "Clearness",
      desc: "Clear, organized, and streamlined description of your car.",
    },
    {
      img: flashcircle,
      title: "Brevity",
      desc: "Without unnecessary frills/extras.",
    },
    {
      img: searchnormal1,
      title: "Transparency",
      desc: "Justified and accurate description according to the information provided.",
    },
  ];
  return (
    <>
      <Banner img={img} />
      <SectionMainLayout>
        <div className="container mx-auto px-4">
          <SectionHeader title="The Benefits" />
          <div className="mt-5 md:mt-10 grid grid-cols-[1fr] md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] xl:grid-cols-[1fr_1fr_1fr_1fr] gap-8 md:gap-12">
            {chooseList.map((item, index) => (
              <div key={index}>
                <img src={item.img} alt="clock" />
                <h4 className="text-lg md:text-2xl font-bold mt-3 md:mt-5">
                  {item.title}
                </h4>
                <p className="text-my_light_text">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionMainLayout>
    </>
  );
}
