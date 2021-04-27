import React from "react";
import styles from "./Cart.module.css";
import { AppStateData, AppStateMethods } from "../AppState/AppState.provider";
import { removeFromCart } from "../AppState/actions/cart";
import { dispatchAction } from "../AppState/actions/interface";
import { ICartItem } from "../AppState/interfaces/cartItem.interface";

class CartRemoveButton extends React.Component<{ item: ICartItem }, {}>{

    onClickHandlerRemove = (dispatch: dispatchAction) => {
        if (typeof dispatch === "function") dispatch(removeFromCart(this.props.item))
    }

    render = () => {
        return (
            <AppStateMethods.Consumer>{(dispatch) => {
                return (
                    <button onClick={this.onClickHandlerRemove.bind(this, dispatch)}>&times;</button>
                )
            }}
            </AppStateMethods.Consumer>
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

    getList = (items: Array<ICartItem>): React.ReactNode => {
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
            <AppStateData.Consumer>{state => {
                const { items, total, amount } = state.cart;
                return (
                    <div className={styles.cart}>
                        <button className={styles.cartButton} onClick={this.onClickHandler}>
                            {`Cart (${amount}) = ${total}$`}
                        </button>
                        <div style={{ display: this.state.isOpen ? "block" : "none" }}>
                            {this.getList(items)}
                        </div>
                    </div>
                )
            }}
            </AppStateData.Consumer>
        )
    }
}

export default Cart
