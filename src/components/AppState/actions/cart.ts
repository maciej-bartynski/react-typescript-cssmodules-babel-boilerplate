import { ICart } from "../interfaces/cart.interface";
import { IProduct } from "../interfaces/product.interface";
import { IAddToCart, ICartInitialize, IRemoveFromCart } from "./interface";

export const addToCart = (payload:IProduct):IAddToCart => ({
    type: "ADD_TO_CART",
    payload
})

export const removeFromCart = (payload:IProduct):IRemoveFromCart => ({
    type: "REMOVE_FROM_CART",
    payload
})

export const initializeCart = (payload:ICart):ICartInitialize => ({
    type: "CART_INITIALIZE",
    payload
})