import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Button1 from "./components/Button1";
import Button2 from "./components/Button2";

const Container = styled.div`
  display: flex;
  width: 400px;
  justify-content: space-between;
  padding: 10px;
`;

// const Button3 = styled.button`
//   padding: 2rem;
//   background-color: tomato;

//   ${(props) =>
//     props.flag &&
//     css`
//       background-color: violet;
//       color: white;
//     `}
// `;

const Button3 = styled.button`
  padding: 2rem;
  background-color: tomato;

  ${(props) => {
    if (props.flag)
      return css`
        background-color: violet;
        color: #e2e626;
      `;
  }}
`;

console.log(Button3);

function AppCss(props) {
  return (
    <div>
      <Container>
        <Button1></Button1>
        <Button2></Button2>
      </Container>
      <Container>
        <Button3>button3 no flag</Button3>
        <Button3 flag={true}>button3 yes flag</Button3>
      </Container>
      <TailWindCssCompoent></TailWindCssCompoent>
    </div>
  );
}

function TailWindCssCompoent(props) {
  let [check, setCheck] = useState(props.check);

  let onChange = () => {
    setCheck(!check);
  };
  return (
    <>
      {check ? (
        <div className=" text-blue-500 p-7 text-center bg-violet-400">
          tailWindCss check true
        </div>
      ) : (
        <div className="text-red-400 p-5 bg-yellow-300 text-center">
          tailWindCss check false
        </div>
      )}
      <button
        onClick={onChange}
        className="p-3 bg-slate-500 text-red-500 rounded-xl hover:scale-105"
      >
        테일윈드 활용 버튼
      </button>
    </>
  );
}

export default AppCss;
