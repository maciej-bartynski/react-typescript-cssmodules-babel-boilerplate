import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionDecrement, actionIncrement } from "../redux/actions/counter";
import { RootState } from "../redux/types";

const useCounter = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state: RootState) => state.counter);

    const counterIncrement = () => {
        dispatch(actionIncrement(undefined))
    }

    const counterDecrement = () => {
        dispatch(actionDecrement(undefined))
    }

    return useMemo(() => ({
        counter,
        counterDecrement,
        counterIncrement
    }), [
        dispatch,
        counter
    ])
}

export default useCounter;