import React from "react";
import { CartContext, CartSetContext } from "../../context/cart";
import styles from "./Cart.module.css";
import { ICartPizza, TUseSetState } from "./../../context/cart";

class CartRemoveButton extends React.Component<{ item: ICartPizza }, {}>{

    onClickHandlerRemove = (methods: TUseSetState) => {
        this.props.item;
        methods?.removeFromCart(this.props.item);
    }

    render = () => {
        return (
            <CartSetContext.Consumer>{(methods) => {
                return (
                    <button onClick={this.onClickHandlerRemove.bind(this, methods)}>&times;</button>
                )
            }}
            </CartSetContext.Consumer>
        )
    }
}

interface IProps {

}

interface IState {
    isOpen: boolean
}

class Cart extends React.Component<IProps, IState>{
    pizzas = [{ name: "margherita" }, { name: "napoletana" }]
    state: IState = {
        isOpen: false,
    }

    constructor(props: IProps) {
        super(props);
        this.state = {
            isOpen: false,
        }
    }

    onClickHandler = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }

    getList = (items: Array<ICartPizza>): React.ReactNode => {
        return items.length
            ? (
                <ul className={styles.cartList}>{
                    items.map((item) => (
                        <li
                            className={styles.cartList__item}
                            key={JSON.stringify(item)}
                        >
                            {item.name}&times;{item.qty}
                            <CartRemoveButton item={item} />
                        </li>
                    ))
                }</ul>
            )
            : <span className={styles.cartList__itemEmpty}>Cart is empty...</span>
    }

    render = () => {

        return (
            <CartContext.Consumer>{state => {
                const { items, total } = state;
                return (
                    <div className={styles.cart}>
                        <button className={styles.cartButton} onClick={this.onClickHandler}>
                            {`Cart (${items.length}) = ${total}$`}
                        </button>
                        <div style={{ display: this.state.isOpen ? "block" : "none" }}>
                            {this.getList(items)}
                        </div>
                    </div>
                )
            }}
            </CartContext.Consumer>
        )
    }
}

export default Cart
