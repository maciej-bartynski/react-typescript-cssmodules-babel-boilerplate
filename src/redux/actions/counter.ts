import { IActionCreatorBuilder } from "../types";

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const actionIncrement: IActionCreatorBuilder<typeof INCREMENT, undefined> = () => {
    return {
        type: INCREMENT,
        payload:undefined
    }
}

export const actionDecrement: IActionCreatorBuilder<typeof DECREMENT, undefined> = () => {
    return {
        type: DECREMENT,
        payload:undefined
    }
}