import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userIncrementActionCreator, userDecrementActionCreator } from './actionCreators';
import { countSelector } from './reducer';

export const ReduxCounter = () => {
    const dispatch = useDispatch();
    const count = useSelector(countSelector);


    // const [count, setCount] = useState(0);
    const handleIncrement = () => {
        dispatch(userIncrementActionCreator())
    }
    const handleDecrement = () => {
        dispatch(userDecrementActionCreator())
    }

    return (
        <>
            <button onClick={handleDecrement}>-1</button>
            <h1>Count: {count}</h1>
            <button onClick={handleIncrement}>+1</button>
        </>
    );

};