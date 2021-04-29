import React from "react";
import { useStore } from "react-redux";
import useCounter from "../../hooks/useCounter";


type TRenderProp<T> = (x: T) => JSX.Element

const CounterLogic: React.FC<{ children: TRenderProp<number> }> = ({ children }) => {

    const { counter, counterIncrement, counterDecrement } = useCounter();

    const rende = React.useRef(0);
    rende.current += 1;

    return (
        <>
            <h3>
                 render {rende.current}
            </h3>
            <button onClick={counterIncrement}>+</button>
            <button onClick={counterDecrement}>-</button>
            {children(counter)}
        </>
    )
}

const CounterChild: React.FC<{ counter: number }> = React.memo(({ counter }) => {
    const [state, setState] = React.useState(0);
    const myCount = React.useRef(0);
    myCount.current += 1;
    return <>
    <div>hello {myCount.current}!! {counter}</div>
        <button onClick={()=>{
            setState(state+1)
        }}>internal</button>
        { state }
    </>
})


const Counter = () => {

    const renderProp: TRenderProp<number> = (params) => {
        return (
            <CounterChild
                counter={params}
            />
        )
    }

    return (
        <CounterLogic>
            {renderProp}
        </CounterLogic>
    )
}

export default Counter;