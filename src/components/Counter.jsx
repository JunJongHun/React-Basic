import React, { useState } from "react";

function Counter(props) {
  let [count, setCount] = useState(0);

  let onClickBtn = () => {
    setCount((pre) => pre + 1);
    props.click();
  };
  return (
    <>
      <div className="container">
        <div className="count">
          {count} / {props.total}
        </div>
        <button className="btn" onClick={onClickBtn}>
          UP
        </button>
      </div>
    </>
  );
}

export default Counter;
