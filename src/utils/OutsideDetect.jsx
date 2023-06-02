import { useEffect, useRef } from "react";

export default function OutsideDetect({ children, setShow }) {
  const ref = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (!ref.current || !ref.current.contains(event.target)) {
        setShow("hidden");
      }
    });
  }, []);
  return <div ref={ref}>{children}</div>;
}
