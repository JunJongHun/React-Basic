import React from "react";
import { useState } from "react";

function Pointer(props) {
  let [point, setPoint] = useState({ x: 0, y: 0 });
  return (
    <div
      className="back"
      onPointerMove={(e) => {
        console.log(e.clientX);
        console.log(e.clientY);
        console.log(`x ${point.x} y ${point.y}`);
        setPoint((pre) => ({ ...pre, x: e.clientX, y: e.clientY }));
      }}
    >
      <div
        className="pointer"
        style={{ transform: `translate(${point.x}px, ${point.y}px)` }}
      ></div>
    </div>
  );
}

export default Pointer;
