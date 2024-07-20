import { createContext, useState } from "react";

export const counterContext = createContext(null);

export const CounterProvider = (props) => {
    const [cnt, setCnt] = useState(5);
    return (
        <counterContext.Provider value={{cnt, setCnt, name:"nitu"}}>
            {props.children}
        </counterContext.Provider>
    )
}

