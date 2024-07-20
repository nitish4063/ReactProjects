import { useContext } from "react";
import { createContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {}
})

export const ThemeProvider = ThemeContext.Provider
// export const ThemeProvider = (props) => {
//     return (
//         <ThemeContext.Provider value={{themeMode, darkTheme, lightTheme}}>
//             {props.children}
//         </ThemeContext.Provider>
//     )
// }

export const ContextTheme = () => {
    return useContext(ThemeContext)
}