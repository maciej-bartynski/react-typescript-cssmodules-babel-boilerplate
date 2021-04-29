import React from "react";
import { Provider } from "react-redux";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import PizzaStore from "../../pages/PizzaStore";
import { store } from "../../redux/store";
import ReduxApp from "./../../pages/ReduxApp";
import styles from "./Routes.module.css";


const AppHeader: React.FC = () => {
    return (
        <nav className={styles.root}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link className={styles.href} to="/">Pizza Store</Link>
                </li>
                <li className={styles.item}>
                    <Link className={styles.href} to="/reduxapp">Redux App</Link>
                </li>
            </ul>
        </nav>
    )
}

export default function Routes() {
    return (
        <Provider store={store}>
            <Router>
                <AppHeader />
                <Switch>
                    <Route path="/reduxapp">
                        <ReduxApp />
                    </Route>
                    <Route path="/">
                        <PizzaStore />
                    </Route>
                </Switch>
            </Router>
        </Provider>
    );
}

