import React from "react";
import { useAppStateMethods } from "../AppState/AppState.provider";
import { IProduct } from "../AppState/interfaces/product.interface";

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

export default PizzaAbstract;