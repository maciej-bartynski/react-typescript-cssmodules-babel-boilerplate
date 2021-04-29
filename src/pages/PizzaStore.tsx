import React from "react";
import Pizzas from "../components/Pizza/Pizzas";
import pizzas from "../data/pizzas.json";
import Header from "../components/Header/Header";
import Cart from "../components/Cart/Cart";
import AppState from "../components/PizzaContext/AppState.provider";

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
