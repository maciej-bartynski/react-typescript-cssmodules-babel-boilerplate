import React from "react";
import Pizzas from "./Pizzas";
import pizzas from "./../data/pizzas.json";
import LogoSVG from "./../svg/logo.svg";

const App = () => {
    return (
        <div>
            <LogoSVG/>
            <Pizzas pizzas={pizzas}/>
        </div>
    )
}

export default App;
