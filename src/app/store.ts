import {combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "../features/model/counter-reducer";
import {appReducer} from "./model/app-reducer";

export const rootReducer = combineReducers({
    counter: counterReducer,
    app: appReducer,
})

export const store = legacy_createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


// @ts-ignore
window.store = store