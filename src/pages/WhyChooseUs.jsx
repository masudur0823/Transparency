import Banner from "../components/Banner";
import img from "../assets/images/why_choose_banner.jpeg";
import SectionMainLayout from "../components/SectionMainLayout";
import SectionHeader from "../components/SectionHeader";
import clock from "../assets/images/icons/clock_yellow.svg";
import car from "../assets/images/icons/smartcar-yellow.svg";
import pro from "../assets/images/icons/profile2user.svg";

export default function WhyChooseUs() {
  const chooseList = [
    {
      img: clock,
      title: "Pro/Individual : Time",
      desc: "You regularly post your ads on the website ads",
    },
    {
      img: car,
      title: "Description : precision",
      desc: "You're always thinking about how you're going to write when it comes to selling.",
    },
    {
      img: pro,
      title: "Convince: decision",
      desc: "Your ads are easier to capture in the minds of your potential buyers.",
    },
  ];
  return (
    <>
      <Banner img={img} />
      <SectionMainLayout>
        <div className="container mx-auto px-4">
          <SectionHeader title="Why Choose Us?" />
          <div className="mt-5 md:mt-10 grid grid-cols-[1fr] md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] gap-8 md:gap-12 lg:gap-28">
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
