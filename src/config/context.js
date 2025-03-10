import { createContext, useContext, useReducer } from "react";
import { cartReducer, initialState } from "./reducer";

const CartContext = createContext(null)
const CartReducerContext = createContext(null)

const CartProvider = ({children})=>{
    
    const [state, dispatch] = useReducer(cartReducer, initialState)

    return(
        <CartContext.Provider value={state}>
            <CartReducerContext.Provider value={dispatch}>
            {children}
            </CartReducerContext.Provider>
        </CartContext.Provider>
    )
}

const useCart = ()=>{
    return useContext(CartContext)
}

const useReducerContext = ()=>{
    return useContext(CartReducerContext)
}

export {CartProvider, useCart, useReducerContext}