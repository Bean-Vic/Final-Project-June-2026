import React, { useState, useEffect, useCallback } from 'react';

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