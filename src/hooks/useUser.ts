import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionSetAge, actionSetName, actionSetSurname } from "../redux/actions/user";
import { RootState } from "../redux/types";

const useUser = () => {
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.user);

    const userSetName = (payload: string) => {
        dispatch(actionSetName(payload))
    }

    const userSetSurname = (payload: string) => {
        dispatch(actionSetSurname(payload))
    }

    const userSetAge = (payload: number) => {
        dispatch(actionSetAge(payload))
    }

    return useMemo(() => ({
        user,
        userSetName,
        userSetSurname,
        userSetAge
    }), [
        dispatch,
        user
    ])
}

export default useUser;