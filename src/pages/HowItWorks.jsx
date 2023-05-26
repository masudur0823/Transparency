import img1 from "../assets/images/1.jpg"
import SectionHeader from "../components/SectionHeader"
import SectionMainLayout from "../components/SectionMainLayout"
export default function HowItWorks() {
    return (
      <div>
        <SectionMainLayout>
          <SectionHeader title="How it works" />
          <div className="container mx-auto mt-10">
            <img src={img1} alt="" className="w-full" />
          </div>
        </SectionMainLayout>
      </div>
    )
  }