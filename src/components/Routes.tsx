import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import PizzaStore from "./PizzaStore";
import ReduxApp from "./ReduxApp"


export default function Routes() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Pizza Store</Link>
                        </li>
                        <li>
                            <Link to="/reduxapp">Redux App</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
    
                    <Route path="/reduxapp">
                        <ReduxApp />
                    </Route>

                    <Route exact path="/">
                        <PizzaStore />
                    </Route>

                </Switch>
            </div>
        </Router>
    );
}

