import React, { useEffect, useReducer } from "react";
import { reducer } from "./reducers/index";
import { appActions, ICartInitialize } from "./actions/interface";
import { initialAppState } from "./initialAppState";
import { initializeCart } from "./actions/cart";
import { ICart } from "./interfaces/cart.interface";

export const AppStateData = React.createContext(initialAppState);
export const AppStateMethods = React.createContext<React.DispatchWithoutAction | React.Dispatch<appActions> | undefined>(undefined);

export const useAppStateMethods = () => {
    const dispatch = React.useContext(AppStateMethods);
    if (typeof dispatch !== "function") throw new Error("Hook was called outside of the AppStateMethods provider");
    return dispatch;
}

const AppStateProvider: React.FC = ({ children }) => {
    const [state, setState] = useReducer(reducer, initialAppState);

    useEffect(() => {
        try {
            const cart = window.localStorage.getItem("cart");
            if (cart) {
                const parsedCart:ICart = JSON.parse(cart);
                const action:ICartInitialize = initializeCart(parsedCart);
                setState(action);
            }
        } catch {}
    }, [])

    useEffect(() => {
        try {
            window.localStorage.setItem("cart", JSON.stringify(state.cart));
        } catch {}
    }, [state.cart])

    return (
        <AppStateData.Provider value={state}>
            <AppStateMethods.Provider value={setState}>
                {children}
            </AppStateMethods.Provider>
        </AppStateData.Provider>
    )
}

export default AppStateProvider;