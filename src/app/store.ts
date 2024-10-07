import {combineReducers, legacy_createStore} from "redux";

export const rootReducer = combineReducers({

})

export const store = legacy_createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


// @ts-ignore
window.store = store