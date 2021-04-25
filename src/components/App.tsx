import React, { useEffect } from "react";
import Pizzas from "./Pizzas";
import pizzas from "./pizzas.json";

const App = () => {
    return (
        <div>
            <Pizzas pizzas={pizzas}/>
        </div>
    )
}

export default App;
