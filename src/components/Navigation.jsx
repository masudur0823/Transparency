import { NavLink } from "react-router-dom";

export default function Navigation() {
  const menuList = [
    {
      title: "Why choose us",
      path: "/aboutus",
    },
    {
      title: "Benefits",
      path: "benefits",
    },
    {
      title: "FAQs",
      path: "faqs",
    },
    {
      title: "How it works",
      path: "howitworks",
    },
    {
      title: "Connect",
      path: "connect",
    },
  ];

  return (
    <ul className="flex gap-1">
      {menuList.map((item, index) => (
        <NavLink
          to={item.path}
          key={index}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-xs lg:text-base btn_bg_color px-2 lg:px-4 py-2 rounded-lg cursor-pointer select-none font-medium"
              : "text-xs lg:text-base px-2 lg:px-4 py-2 rounded-lg cursor-pointer select-none font-medium"
          }
        >
          {item?.title}
        </NavLink>
      ))}
    </ul>
  );
}
