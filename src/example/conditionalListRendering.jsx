import React from 'react';

export const ConditionalListRendering = ({ shouldRender }) => {
    const items = [
        {
            name: 'Apple',
            id: 1,
        },
        {
            name: 'Banana',
            id: 2,
        },
        {
            name: 'Cherry',
            id: 3,
        }
    ];

    if (!shouldRender) {
        return null;
    }

    return (
        <ul>
            {items.map((item, index) => {
                return (
                    <li key={item.id}>name: {item.name} | id: {item.id}</li>
                );
            })}
        </ul>
    );
};