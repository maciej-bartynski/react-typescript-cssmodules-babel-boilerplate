import React from "react";
import Pizzas from "./Pizza/Pizzas";
import pizzas from "./../data/pizzas.json";
import Header from "./Header/Header";
import Cart from "./Cart/Cart";
import AppState from "./AppState/AppState.provider";

const App = () => {
    return (
        <AppState>
            <Header />
            <Cart />
            <Pizzas pizzas={pizzas}/>
        </AppState>
    )
}

export default App;
