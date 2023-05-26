import { Link } from "react-router-dom";
import logo from "../assets/images/logo_white.svg";
import fcaebook from "../assets/images/icons/Facebook.svg";
import LinkedIN from "../assets/images/icons/LinkedIN.svg";

export default function Footer() {
  return (
    <div
      style={{ background: "#7B5618" }}
      className="pt-10 md:pt-14 pb-8 md:pb-12 text-white"
    >
      <div className="container mx-auto px-4">
        {/* part1 */}
        <div className="pb-6 md:pb-16">
          <Link to="/">
            <img src={logo} alt="" className="w-48 lg:w-auto" />
          </Link>
        </div>
        {/* part2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <ul>
            <li>
              <Link to="/aboutus" className="text-base font-semibold ">
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
              <a
                href="#!"
                className="btn_text_color p-4 bg-white rounded-full inline-block"
              >
                Share your feedback
              </a>
            </li>
          </ul>
        </div>
        <div className="border-t my-10"></div>
        {/* part3 */}
        <div className="flex justify-center lg:justify-end">
          <div className="flex gap-4 items-center mb-3 lg:-mb-14">
            <p>Follow us</p>
            <a href="#!">
              <img src={fcaebook} alt="fcaebook" />
            </a>
            <a href="#!">
              <img src={LinkedIN} alt="LinkedIN" />
            </a>
          </div>
        </div>
        <div className="text-center">
          <p className="text-sm lg:text-base">
            Copyright 2022 Transparency. All rights reserved . Transparency
            confidential
          </p>
          <p className="text-xs lg:text-base mt-2">
            ©2022 Transparency ® Global Inc.
          </p>
        </div>
      </div>
    </div>
  );
}
