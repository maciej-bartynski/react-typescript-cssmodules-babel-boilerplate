import React from "react";
import { useAppStateMethods } from "../PizzaContext/AppState.provider";
import { IProduct } from "../PizzaContext/interfaces/product.interface";
import PizzaAbstract, { IProductAbstract } from "../PizzaAbstract/PizzaAbstract";
import styles from "./Pizzas.module.css";

const RegularPizza: React.FC<IProduct & IProductAbstract> = ({
    id,
    name,
    description,
    price,
    addToCart
}) => {

    return (
        <li className={styles.listItem}>
            <h2 className={styles.listItem__title}>{name}</h2>
            <div className={styles.listItem__desc}>{description}</div>
            <div className={styles.listItem__price}>
                <span>Price: {price}</span>
                <button
                    onClick={addToCart}
                    className={styles.listItem__order}>
                    Order
                </button>
            </div>
        </li>
    )
}

export default PizzaAbstract(RegularPizza);

