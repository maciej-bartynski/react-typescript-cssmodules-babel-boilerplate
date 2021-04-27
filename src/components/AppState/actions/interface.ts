import { ICart } from "../interfaces/cart.interface";
import { IProduct } from "../interfaces/product.interface";

export interface IAction<T> {
    type: T
}

export interface ICartInitialize extends IAction<"CART_INITIALIZE"> {
    payload: ICart
}

export interface IAddToCart extends IAction<"ADD_TO_CART"> {
    payload: IProduct
}

export interface IRemoveFromCart extends IAction<"REMOVE_FROM_CART"> {
    payload: IProduct
}

export type dispatchAction = React.DispatchWithoutAction | React.Dispatch<appActions> | undefined;
export type appActions = IAddToCart | IRemoveFromCart | ICartInitialize;
export interface appActionCreator {
    ():appActions
}