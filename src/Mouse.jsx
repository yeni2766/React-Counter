import { useState, useEffect } from "react";

export default function Mouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    function handleMouseMove(e) {
      setX(e.clientX);
      setY(e.clientY);
    }

    window.addEventListener("mousemove", handleMouseMove);

    // cleanup: remove listener when component unmounts
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-blue-500 text-white">
      <p>X: {x}</p>
      <p>Y: {y}</p>
    </div>
  );
}