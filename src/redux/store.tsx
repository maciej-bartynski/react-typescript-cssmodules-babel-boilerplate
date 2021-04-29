import { createStore, combineReducers } from "redux";
import reducerTest from "./reducers/test/reducer";
import reducerUser from "./reducers/user/reducer";
import reducerConuter from "./reducers/counter/reducer";

export const rootReducer = combineReducers({
    test: reducerTest,
    counter: reducerConuter,
    user: reducerUser
});

export const store = createStore(rootReducer);
