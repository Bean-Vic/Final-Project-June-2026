import React from 'react';
import { Provider } from 'react-redux';
import { reduxStore } from './reduxStore';
import { ReduxCounter } from './redux-counter'

export const EntranceContainer = () => {
    return(
        <Provider store={reduxStore}>
            <h1>Hello world from Redux Example</h1>
            <ReduxCounter />
        </Provider>
    )
}
