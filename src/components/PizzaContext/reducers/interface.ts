import { ICart } from "../interfaces/cart.interface";

export interface cartReducer<T> {
    (state: ICart, action: T): ICart
}
