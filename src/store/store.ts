"use client";
import { Action,Middleware,ThunkAction,configureStore,createSelector } from "@reduxjs/toolkit";
import {dynamicMiddleware} from './middleware'
import rootReducer from './rootReducer'
import { setupListeners } from "@reduxjs/toolkit/query";

export type RootState = ReturnType<typeof rootReducer>;

const middleware: Middleware[] = [dynamicMiddleware];

export const makeStore = (preloadedState? : Partial<RootState>) => {
    const store = configureStore({
        reducer:rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
        preloadedState
    })

    setupListeners(store.dispatch);
    return store;
}

export const store = makeStore();

// Infer the type of `store`
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ThunkReturnType = void> = ThunkAction<ThunkReturnType, RootState, unknown, Action>;
export type AppAction<R = Promise<void>> = Action<string> | ThunkAction<R, RootState, unknown, Action<string>>;

export const createAppSelector = createSelector.withTypes<RootState>();

export default store;