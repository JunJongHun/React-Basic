import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Card(props) {
  let [data, setData] = useState([]);
  let [check, setCheck] = useState(false);

  useEffect(() => {
    let d = fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res);
      });
  }, [check]);

  return (
    <div>
      <div>{check && data.title}</div>
      <div>aa</div>
      <button
        onClick={() => {
          setCheck((pre) => !pre);
        }}
      >
        click me
      </button>
    </div>
  );
}

export default Card;
