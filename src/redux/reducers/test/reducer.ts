import { TEST } from "./../../actions/test";
import { TAction, TReducer, RootState } from "./../../types";
import { actionTest } from "../../actions/test";
import { initialState } from "./initialState";

type TActionsAvailable = ReturnType<typeof actionTest>;
type TState = string;

const reducerSetTest: TReducer<TState, typeof TEST, undefined> = () => {
    const state = "initialized";
    return state;
}

const userReducer = new Map()
    .set(TEST, reducerSetTest);

const testReducer = (state:TState=initialState, action:TActionsAvailable) => {
    const reducer: TReducer<TState, typeof action.type, typeof action.payload> = userReducer.get(action.type);
    return typeof reducer === "function" ? reducer(state, action) : state;
}

export default testReducer;