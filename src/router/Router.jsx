import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Layouts from "../components/Layouts";
import WhyChooseUs from "../pages/WhyChooseUs";
import Benefits from "../pages/Benefits";
import Faqs from "../pages/Faqs";
import HowItWorks from "../pages/HowItWorks";
import Connects from "../pages/Connects";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layouts />}>
        <Route path="/" element={<Home />} />
        <Route path="aboutus" element={<WhyChooseUs />} />
        <Route path="benefits" element={<Benefits />} />
        <Route path="faqs" element={<Faqs />} />
        <Route path="howitworks" element={<HowItWorks />} />
        <Route path="connect" element={<Connects />} />
      </Route>
    </Routes>
  );
}
