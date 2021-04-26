import React from "react";
import { useSetCartState } from "../../context/cart";
import styles from "./Pizzas.module.css";

interface IPizza {
    id: number,
    price: number,
    name: string,
    description: string,
}

const SinglePizza: React.FC<IPizza> = ({
    id,
    name,
    description,
    price
}) => {
    const cartMethods = useSetCartState();
    
    const handleOnClick = () => {
        cartMethods.addToCart({
            id,
            name,
            description,
            price
        })
    }
    
    return (
        <li className={styles.listItem}>
            <h2 className={styles.listItem__title}>{name}</h2>
            <div className={styles.listItem__desc}>{description}</div>
            <div className={styles.listItem__price}>
                <span>Price: {price}</span>
                <button 
                    onClick={handleOnClick}
                    className={styles.listItem__order}>
                    Order
                </button>
            </div>
        </li>
    )
}


interface IProps {
    pizzas: Array<IPizza>
}

const Pizzas: React.FC<IProps> = ({ pizzas }) => {
    return <ul className={styles.root}>{
        pizzas.map((item: IPizza) => <SinglePizza key={item.id} {...item} />)
    }</ul>
}

export default Pizzas;
