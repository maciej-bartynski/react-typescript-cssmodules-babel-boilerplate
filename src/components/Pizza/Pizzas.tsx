import React from "react";
import { IProduct } from "../AppState/interfaces/product.interface";
import styles from "./Pizzas.module.css";
import PizzaRegular from "./../PizzaRegular/PizzaRegular";
import PizzaSpecial from "./../PizzaSpecial/PizzaSpecial";

interface IProps {
    pizzas: Array<IProduct>
}

const Pizzas: React.FC<IProps> = ({ pizzas }) => {
    return <ul className={styles.root}>{
        pizzas.map((item: IProduct) => {
            const isSpecial = item.discount;
            if (isSpecial) return <PizzaSpecial key={item.id} {...item} />
            return <PizzaRegular key={item.id} {...item} />
        })
    }</ul>
}

export default Pizzas;
