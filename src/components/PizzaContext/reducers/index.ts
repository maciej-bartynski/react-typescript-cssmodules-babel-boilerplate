import { appActions, IAddToCart, ICartInitialize, IRemoveFromCart } from "../actions/interface";
import { IApp } from "../interfaces/app.interface";
import { reducerAddToCart, reducerRemoveFromCart } from "./cartReducer";

export function reducer(state: IApp, action: appActions) {
    switch (true) {
        case action.type === "ADD_TO_CART": {
            const cart = reducerAddToCart(state.cart, action as IAddToCart);
            return { ...state, cart };
        }
        case action.type === "REMOVE_FROM_CART": {
            const cart = reducerRemoveFromCart(state.cart, action as IRemoveFromCart);
            return { ...state, cart };
        }
        case action.type === "CART_INITIALIZE": {
            return { ...state, cart: (action as ICartInitialize).payload };
        }
        default: {
            return state;
        }
    }
}