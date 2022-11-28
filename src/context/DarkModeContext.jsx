import { createContext, useState } from "react";

export let DarkModeContext = createContext();

export function DarkModeContextProvider(props) {
  let [darkMode, setDarkMode] = useState(false);
  let darkModeChange = () => {
    setDarkMode((darkMode) => !darkMode);
  };
  return (
    <>
      <DarkModeContext.Provider value={{ darkMode, darkModeChange }}>
        <div className="flex flex-col items-center">{props.children}</div>
      </DarkModeContext.Provider>
    </>
  );
}
