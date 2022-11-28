import React, { useContext } from "react";
import {
  DarkModeContext,
  DarkModeContextProvider,
} from "../context/DarkModeContext";

function AppTheme(props) {
  return (
    <>
      <DarkModeContextProvider>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </DarkModeContextProvider>
    </>
  );
}

function Header(props) {
  return (
    <>
      <div className=" mb-8">Header</div>
    </>
  );
}
function Main(props) {
  let { darkMode, darkModeChange } = useContext(DarkModeContext);
  return (
    <>
      <div
        className={
          darkMode ? `text-blue-700 bg-red-300 ` : `text-white bg-slate-400`
        }
      >
        DarkMode : {darkMode.toString()}
      </div>
      <button
        className="p-3 bg-orange-400 text-white rounded-xl font-bold hover:scale-110 "
        onClick={darkModeChange}
      >
        toggle
      </button>
    </>
  );
}
function Footer(props) {
  return (
    <>
      <div className="mt-8">Footer</div>
    </>
  );
}
export default AppTheme;
