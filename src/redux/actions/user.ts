import { IActionCreatorBuilder, TAction, TActionCreator } from "../types";
import { Action } from "redux";

export const SET_NAME = "SET_NAME";
export const SET_SURNAME = "SET_SURNAME";
export const SET_AGE = "SET_AGE";

export const actionSetName: TActionCreator<typeof SET_NAME, string> = (payload) => {
    return {
        type: SET_NAME,
        payload
    }
}

export const actionSetSurname: TActionCreator<typeof SET_SURNAME, string> = (payload) => {
    return {
        type: SET_SURNAME,
        payload
    }
}

export const actionSetAge: TActionCreator<typeof SET_AGE, number> = (payload) => {
    return {
        type: SET_AGE,
        payload
    }
}