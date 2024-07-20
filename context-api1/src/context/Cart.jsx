import { createContext, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = (props) => {
    const [items, setItems] = useState([])
    // console.log("yeah", items)
    return (
        <CartContext.Provider value={{items, setItems}}>
            {props.children}
        </CartContext.Provider>
    )
}