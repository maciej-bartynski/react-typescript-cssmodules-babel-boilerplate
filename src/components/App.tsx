import React from "react";
import Pizzas from "./Pizza/Pizzas";
import pizzas from "./../data/pizzas.json";
import Header from "./Header/Header";
import Cart from "./Cart/Cart";
import AppState from "./AppState/AppState.provider";
import Routes from "./Routes"

const App = () => {
    return (
        <Routes/>
    )
}

export default App;
