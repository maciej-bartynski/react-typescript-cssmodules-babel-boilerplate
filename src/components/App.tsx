import React from "react";
import Pizzas from "./Pizza/Pizzas";
import pizzas from "./../data/pizzas.json";
import Header from "./Header/Header";
import Cart from "./Cart/Cart";
import { CartContextProvider } from "./../context/cart";

const App = () => {
    return (
        <CartContextProvider>
            <Header />
            <Cart />
            <Pizzas pizzas={pizzas}/>
        </CartContextProvider>
    )
}

export default App;
