import React, { Children } from "react";
import { useAppStateMethods } from "../AppState/AppState.provider";
import { IProduct } from "../AppState/interfaces/product.interface";
import { addToCart } from "../AppState/actions/cart";
import { ICartItem } from "../AppState/interfaces/cartItem.interface";

export interface IProductAbstract extends IProduct {
    addToCart: () => void
}

const PizzaAbstract = function (ChildComponent: React.ComponentType<IProductAbstract>) {

    return (props: IProduct) => {
        const dispatch = useAppStateMethods();

        const addToCart = () => {
            dispatch({
                type: "ADD_TO_CART",
                payload: props
            })
        }

        return <ChildComponent
            addToCart={addToCart}
            {...props}
        />
    }
};


type T_ManipulateCartItem = (data: ICartItem) => void;
type T_RenderProps = { addToCart: T_ManipulateCartItem, removeFromCart: T_ManipulateCartItem };
type T_RenPopHandleCart = React.FC<{ children: (data: T_RenderProps) => JSX.Element }>;

const EditCart: T_RenPopHandleCart = ({ children }) => {

    const dispatch = useAppStateMethods();

    const handleAddToCart: T_ManipulateCartItem = (payload) => {
        dispatch(addToCart(payload));
    }

    const handleRemoveFromCart: T_ManipulateCartItem = (payload) => {
        dispatch(addToCart(payload));
    }

    return children({
        addToCart: handleAddToCart,
        removeFromCart: handleRemoveFromCart
    });
}

export default PizzaAbstract;