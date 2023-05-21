import logo from "../assets/images/logo.svg";

export default function Header() {
  return (
    <div className="header_main flex items-center">
      <div className="container mx-auto">
        <div className="flex gap-5">
          <img src={logo} alt="" />
          <div className="flex">
            <ul className="flex gap-5">
                <li>Why choose us</li>
                <li>Benefits</li>
                <li>FAQs</li>
                <li>How it works</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
