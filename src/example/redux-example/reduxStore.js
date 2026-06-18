import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';

export const reduxStore = configureStore({
    reducer: reducer,
    devTools: {
        name: 'FS2026 Redux',
    }
});