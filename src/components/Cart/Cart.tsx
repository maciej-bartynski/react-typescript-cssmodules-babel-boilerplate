import React from "react";
import styles from "./Cart.module.css";
import { AppStateData, AppStateMethods } from "../AppState/AppState.provider";
import { removeFromCart } from "../AppState/actions/cart";
import { dispatchAction } from "../AppState/actions/interface";
import { ICartItem } from "../AppState/interfaces/cartItem.interface";
import EditCart, { T_ManipulateCartItem } from "../AppState/EditCart";

class CartRemoveButton extends React.Component<{ item: ICartItem }, {}>{

    onClickEditCart = (editCart: T_ManipulateCartItem) => {
        editCart(this.props.item);
    }

    render = () => {
        return (
            <EditCart>
                {({ removeFromCart, addToCart }) => (
                    <>
                        <button onClick={this.onClickEditCart.bind(this, removeFromCart)}>
                            <strong>-</strong>
                        </button>
                        <button onClick={this.onClickEditCart.bind(this, addToCart)}>
                            <strong>+</strong>
                        </button>
                    </>
                )}
            </EditCart>
        )
    }
}

interface IProps {

}

interface IState {
    isOpen: boolean
}

class Cart extends React.Component<IProps, IState>{

    #cartRef: React.RefObject<HTMLDivElement>;

    state: IState;

    constructor(props: IProps) {
        super(props);
        this.state = {
            isOpen: false,
        }

        this.#cartRef = React.createRef();
    }

    componentDidMount = () => {
        document.addEventListener("mousedown", this.onClickOutsideHandler);
    }

    componentWillUnmount = () => {
        document.removeEventListener("mousedown", this.onClickOutsideHandler);
    }

    onClickOutsideHandler: (e: MouseEvent) => any = (e) => {
        if (this.#cartRef.current && !(this.#cartRef.current).contains(e.target as Node))
            this.setState({ isOpen: false })
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
                    <div className={styles.cart} ref={this.#cartRef}>
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
