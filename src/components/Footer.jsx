import { Link } from "react-router-dom";
import logo from "../assets/images/logo_white.svg";

export default function Footer() {
  return (
    <div style={{ background: "#7B5618" }} className="pt-14 pb-12 text-white">
      <div className="container mx-auto">
        {/* part1 */}
        <div className="pb-16">
          <img src={logo} alt="" className="w-24 lg:w-auto" />
        </div>
        {/* part2 */}
        <div className="grid grid-cols-4 gap-4">
          <ul>
            <li>
              <Link to="/aboutus" className="text-base font-semibold">
                About Us
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/" className="text-base font-semibold">
                Trust, Safety & Security
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/" className="text-base font-semibold">
                Privacy statement
              </Link>
            </li>
            <li>
              <Link to="/" className="text-base font-semibold">
                Terms of use
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-4">
            <li>
              <Link to="/" className="text-base font-semibold">
                Got a question, comment or idea?
              </Link>
            </li>
            <li>
              <a href="#!" className="btn_text_color p-4 bg-white rounded-full inline-block">Share your feedback</a>
            </li>
          </ul>
        </div>
        <div className="border-t my-10"></div>
        {/* part3 */}
        <div className="text-center">
          <p>Copyright 2022 Transparency. All rights reserved . Transparency confidential</p>
          <p className="mt-2">©2022 Transparency ® Global Inc.</p>
        </div>
      </div>
    </div>
  );
}
