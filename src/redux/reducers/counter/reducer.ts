import { initialState } from "./initialState";
import { TAction, TReducer, RootState } from "./../../types";
import { INCREMENT, DECREMENT } from "./../../actions/counter";
import { actionDecrement, actionIncrement } from "../../actions/counter";

type TActionsAvailable = ReturnType<typeof actionDecrement> | ReturnType<typeof actionIncrement>;
type TState = number;

const reducerIncrement: TReducer<TState, typeof INCREMENT, number> = (state) => {
    return state + 1;
}

const reducerDecrement: TReducer<TState, typeof DECREMENT, number> = (state) => {
    return state - 1;
}

const userReducer = new Map()
    .set(INCREMENT, reducerIncrement)
    .set(DECREMENT, reducerDecrement)


const counterBuilder = (state: TState = initialState, action: TActionsAvailable) => {
    const reducer: TReducer<TState, typeof action.type, typeof action.payload> = userReducer.get(action.type);
    return typeof reducer === "function" ? reducer(state, action) : state;
}

export default counterBuilder

