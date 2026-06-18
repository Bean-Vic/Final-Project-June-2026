import React, { useState, useEffect, useCallback, useMemo } from 'react';


const Child = ({ onClick }) => {
    console.log('Child rendered');
    return <button onClick={onClick}>Click Child</button>;
};

export const Example = () => {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        console.log('Child button clicked');
        setCount(count + 1); // setCount(1)
    }, []); // dependency array with empty value, this function will only calculate once when component mounting

    // useMemo returns the same <Child /> element unless handleClick changes
    const memoizedChild = useMemo(() => {
        return <Child onClick={handleClick} />;
    }, [handleClick]);

    return (
        <div>
            <p>Parent count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button> {/* when click on button, React will recalculate same function */}

            <button onClick={handleClick}>IncrementWithCallback</button> {/* reuse same callback to save resource */}

            {memoizedChild}
        </div>
    );
}

export const Rickandmorty = () => {
    //1. use state to manage api result
    //2. use useEffect to make api request when component first load
    // GET https://rickandmortyapi.com/api/character
    const [response, setResponse] = useState(null);

    const memorizedFetchAllCharacters = useCallback(() => {
        fetch("https://rickandmortyapi.com/api/character")
            .then(response => response.json())
            .then(data => setResponse(data));
    }, []);

    const notMemorizedFetchAllCharacters =
        fetch("https://rickandmortyapi.com/api/character")
            .then(response => response.json())
            .then(data => setResponse(data));


    useEffect(() => {
        // fetch("https://rickandmortyapi.com/api/character")
        //     .then(response => response.json())
        //     .then(data => setResponse(data));
        memorizedFetchAllCharacters();

        return () => {
            // 卸载函数，component unmount的时候执行
        }
    }, []);

    console.log(response);

    return (
        <>
            <h1>Rick and Morty</h1>
            {response?.results.map((item, index) => {
                return (
                    <div>
                        <img src={item.image} alt="icon" />
                        <div>Name: {item.name}</div>
                        <div>Gender: {item.gender}</div>
                    </div>
                );
            })}
        </>
    );
}