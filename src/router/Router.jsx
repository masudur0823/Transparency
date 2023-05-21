import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Layouts from "../components/Layouts";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layouts /> }>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}
