import { actionSetAge, actionSetName, actionSetSurname } from "../../actions/user";
import { SET_AGE, SET_NAME, SET_SURNAME } from "../../actions/user";
import initialState from "./initialState";
import { TAction, RootState, TReducer } from "./../../types";

type TActionsAvailable = ReturnType<typeof actionSetAge> | ReturnType<typeof actionSetName> | ReturnType<typeof actionSetSurname>;
type TState = typeof initialState;

const reducerSetName: TReducer<TState, typeof SET_NAME, string> = (state, action) => {
    return { ...state, name: action.payload };
}

const reducerSetSurname: TReducer<TState, typeof SET_SURNAME, string> = (state, action) => {
    return { ...state, surname: action.payload };
}

const reducerSetAge: TReducer<TState, typeof SET_AGE, number> = (state, action) => {
    return { ...state, age: action.payload };
}

const userReducerMap = new Map()
    .set(SET_NAME, reducerSetName)
    .set(SET_SURNAME, reducerSetSurname)
    .set(SET_AGE, reducerSetAge)

const userReducer = (state: TState = initialState, action: TActionsAvailable) => {
    const reducer: TReducer<TState, typeof action.type, typeof action.payload> = userReducerMap.get(action.type);
    return typeof reducer === "function" ? reducer(state, action) : state;
}

export default userReducer;