import React from "react";
import { useAppStateMethods } from "../AppState/AppState.provider";
import { IProduct } from "../AppState/interfaces/product.interface";
import PizzaAbstract, { IProductAbstract } from "../PizzaAbstract/PizzaAbstract";
import styles from "./Pizzas.module.css";

const RegularPizza: React.FC<IProduct & IProductAbstract> = ({
    id,
    name,
    description,
    price,
    discount,
    addToCart,
}) => {

    const newPrice = price - (price * (discount || 100) / 100);

    return (
        <li className={styles.listItem}>
            <h2 className={styles.listItem__title}>{name}</h2>
            <p className={styles.listItem__discount}>special offer: -{discount}%</p>
            <div className={styles.listItem__desc}>{description}</div>
            <div className={styles.listItem__price}>
                <span>Price: <span className={styles.listItem__oldprice}>{price}</span>{" "}{newPrice}</span>
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