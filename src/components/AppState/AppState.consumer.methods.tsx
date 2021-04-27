import React, { ReactNode } from "react";
import { appActions } from "./actions/interface";
import { AppStateMethods } from "./AppState.provider";
import { IApp } from "./interfaces/app.interface";

type childrenAsFunction = { children(state: React.DispatchWithoutAction | undefined | React.Dispatch<appActions>): ReactNode }

const AppStateDataConsumer: React.FC<childrenAsFunction> = ({ children }) => {
    return (
        <AppStateMethods.Consumer>
            {state => children(state)}
        </AppStateMethods.Consumer>
    )
}

export default AppStateDataConsumer;