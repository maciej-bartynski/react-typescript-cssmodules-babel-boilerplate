import { ICartItem } from "./cartItem.interface";

export interface ICart {
    items: ICartItem[],
    total: number,
    amount: number
}