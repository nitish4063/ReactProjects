import { useEffect } from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/Theme";
import { useState } from "react";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

import { ContextTheme } from "./contexts/Theme";

function App() {
  // const {themeMode, darkTheme, lightTheme} = ContextTheme()

  const [themeMode, setThemeMode] = useState("light")

  const darkTheme = () => {
    setThemeMode("dark")
  }

  const lightTheme = () => {
    setThemeMode("light")
  }

  useEffect(()=>{
    const doc = document.querySelector('html').classList;
    doc.remove("light", "dark")
    doc.add(themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
    {/* <> */}
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
    // </>
  );
}

export default App;
