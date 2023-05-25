import Accordion from "../components/Accordion";
import SectionHeader from "../components/SectionHeader";
import SectionMainLayout from "../components/SectionMainLayout";

export default function Faqs() {
  const accordionItems = [
    {
      title: "What kind of financing options are available?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In.Lorem ipsum dolor sit amet, consectetur",
    },
    {
      title: "Which lender do you work with?",
      content: "Content for Accordion 2",
    },
    {
      title: "Will financing with CarGurus affect my credit score",
      content: "Content for Accordion 3",
    },
  ];
  return (
    <div
      style={{
        background:
          "linear-gradient(99.9deg, #F2EBC9 4.3%, rgba(206, 227, 144, 0.1) 111.37%)",
      }}
    >
      <SectionMainLayout>
        <div className="container mx-auto px-4">
          <SectionHeader title="Frequently Asked Questions" />
          <p className="text-xl font-medium text-center mt-2 mb-10 md:mb-20">
            All the answers in one place
          </p>
          <Accordion items={accordionItems} />
        </div>
      </SectionMainLayout>
    </div>
  );
}
