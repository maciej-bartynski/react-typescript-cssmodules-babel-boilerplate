import { IAddToCart, IRemoveFromCart } from "../actions/interface";
import { ICartItem } from "../interfaces/cartItem.interface";
import { cartReducer } from "./interface";

export const reducerAddToCart: cartReducer<IAddToCart> = function (state, action) {
    const { payload: incomingProduct } = action;
    const isInCart: boolean = !!state.items.find(cartItem => cartItem.id === incomingProduct.id);
    const alghoritmAccumulator = [] as Array<ICartItem>;
    let cartTotal = 0;
    let amount = 0;

    const newCartItems = state.items.reduce((result, item) => {
        const isCurrent = item.id === incomingProduct.id;
        const newItem = {
            ...item,
            qty: isCurrent ? item.qty + 1 : item.qty
        };
        cartTotal += newItem.price * newItem.qty;
        amount += newItem.qty;
        return result = [...result, newItem];
    }, alghoritmAccumulator);

    if (!isInCart) {
        const newItem: ICartItem = { ...incomingProduct, qty: 1 }
        newCartItems.push(newItem);
        cartTotal += newItem.price;
        amount +=1;
    }

    return {
        ...state,
        total: cartTotal,
        items: newCartItems,
        amount
    };
}

export const reducerRemoveFromCart: cartReducer<IRemoveFromCart> = function (state, action) {
    const { payload: incomingProduct } = action;
    const alghoritmAccumulator = [] as Array<ICartItem>;
    let cartTotal = 0;
    let amount =0;
    const newCartItems = state.items.reduce((result, item) => {
        const isCurrent = item.id === incomingProduct.id;
        const newItem = {
            ...item,
            qty: isCurrent ? item.qty - 1 : item.qty
        };
        cartTotal += newItem.qty > 0 ? newItem.price * newItem.qty : 0;
        amount += newItem.qty;
        return result = newItem.qty > 0 ? [...result, newItem] : [...result];
    }, alghoritmAccumulator);

    return {
        ...state,
        total: cartTotal,
        items: newCartItems,
        amount,
    }
}
