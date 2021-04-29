import { IActionCreatorBuilder } from "../types";

export const TEST = "TEST";

export const actionTest: IActionCreatorBuilder<typeof TEST, undefined> = () => {
    return {
        type: TEST,
        payload: undefined
    }
}