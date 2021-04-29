import React, { ReactNode } from "react";
import { AppStateData } from "./AppState.provider";
import { IApp } from "./interfaces/app.interface";

type childrenAsFunction = { children(state: IApp): ReactNode }

const AppStateDataConsumer: React.FC<childrenAsFunction> = ({ children }) => {
    return (
        <AppStateData.Consumer>
            {state => children(state)}
        </AppStateData.Consumer>
    )
}

export default AppStateDataConsumer;