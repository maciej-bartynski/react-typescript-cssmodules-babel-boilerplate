import React, { useEffect } from "react";
import styles from "./Pizzas.module.css";

interface IPizza {
    id: number,
    price: number,
    name: string,
    description: string,
}

interface IProps {
    pizzas: Array<IPizza>
}

const Pizzas: React.FC<IProps> = ({ pizzas }) => {
    return <ul className={styles.root}>{
        pizzas.map(item => {
            return (
                <li key={item.id}>
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                    <span>Price: {item.price}</span>
                </li>
            )
        })
    }</ul>
}

export default Pizzas;
