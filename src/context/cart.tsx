import React, { useMemo, useState } from "react";
import { IPizza } from "./interfaces";

export interface ICartPizza {
    id: number,
    name: string,
    description: string,
    price: number,
    qty: number,
}

export interface ICart {
    items: Array<ICartPizza>,
    total: number,
}

const initialCartContext: ICart = {
    items: [],
    total: 0
}

export type TUseSetState = {
    removeFromCart: (incomingItem: IPizza) => void;
    addToCart: (incomingItem: IPizza) => void;
} | undefined

export const CartContext = React.createContext(initialCartContext);
export const CartSetContext = React.createContext<TUseSetState>(undefined);

export const useSetCartState = () => {
    const stateMethods = React.useContext(CartSetContext);
    if (typeof stateMethods === "object") return stateMethods;
    else throw new Error("Calling hook useCartState outside context")
}

export const CartContextProvider: React.FC = ({ children }) => {
    const [state, setState] = useState(initialCartContext);

    const addToCart = (incomingItem: IPizza) => {
        const isInCart: boolean = !!state.items.find(cartItem => cartItem.id === incomingItem.id);
        const alghoritmAccumulator = [] as Array<ICartPizza>;
        let cartTotal = 0;

        const newCartItems = state.items.reduce((result, item) => {
            const isCurrent = item.id === incomingItem.id;

            const newItem = {
                ...item,
                qty: isCurrent ? item.qty + 1 : item.qty
            };
            cartTotal += newItem.price * newItem.qty;
            return result = [...result, newItem];
        }, alghoritmAccumulator);

        if (!isInCart) {
            const newItem: ICartPizza = { ...incomingItem, qty: 1 }
            newCartItems.push(newItem);
            cartTotal += newItem.price;
        }

        setState({
            total: cartTotal,
            items: newCartItems
        })
    }


    const removeFromCart = (incomingItem: IPizza) => {
        const alghoritmAccumulator = [] as Array<ICartPizza>;
        let cartTotal = 0;

        const newCartItems = state.items.reduce((result, item) => {
            const isCurrent = item.id === incomingItem.id;
            const newItem = {
                ...item,
                qty: isCurrent ? item.qty - 1 : item.qty
            };
            cartTotal += newItem.qty > 0 ? newItem.price * newItem.qty : 0;
            return result = newItem.qty > 0 ? [...result, newItem] : [...result];
        }, alghoritmAccumulator);

        setState({
            total: cartTotal,
            items: newCartItems
        })
    }

    const cartOperations = React.useMemo(() => {
        return {
            removeFromCart,
            addToCart
        }
    }, [state, setState])

    return (
        <CartContext.Provider value={state}>
            <CartSetContext.Provider value={cartOperations}>
                {children}
            </CartSetContext.Provider>
        </CartContext.Provider>
    )
}