import React, { useState } from "react";
import Counter from "./components/Counter";

function AppCounter(props) {
  let [count, setCount] = useState(0);

  let click = () => {
    setCount((pre) => pre + 1);
  };
  return (
    <>
      <h1>total = {count}</h1>
      <Counter total={count} click={click}></Counter>
      <Counter total={count} click={click}></Counter>
    </>
  );
}

export default AppCounter;
