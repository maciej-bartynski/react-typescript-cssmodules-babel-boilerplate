import { Action } from "redux";
import { rootReducer } from "./store";

export type RootState = ReturnType<typeof rootReducer>;
export type TAction<ActionType, PayloadType> = Action<ActionType> & { payload: PayloadType };
export type TActionCreator<ActionType, PayloadType> = (payload: PayloadType) => TAction<ActionType, PayloadType>;
export interface IActionCreatorBuilder<T, P> {
    (payload: P): TAction<T, P>
}
export type TReducer<S, A, P> = (state: S, action: TAction<A, P>) => S;