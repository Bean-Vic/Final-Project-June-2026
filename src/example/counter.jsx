import React, { useState } from 'react';

export const Counter = () => {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(count + 1);
    }
    const handleDecrement = () => {
        setCount(count - 1);
    }
    return (
        <>
            <button onClick={handleDecrement}>-1</button>
            <h1>Count: {count}</h1>
            <button onClick={handleIncrement}>+1</button>
        </>
    );
}