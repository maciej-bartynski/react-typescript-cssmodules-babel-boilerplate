import { IApp } from "./interfaces/app.interface";

export const initialAppState: IApp = {
    cart: {
        total: 0,
        items: [],
        amount: 0
    }
}