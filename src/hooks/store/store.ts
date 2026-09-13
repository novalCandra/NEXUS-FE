import { configureStore } from "@reduxjs/toolkit";
import AuthSlicer  from "../redux/reduxHookAuth";
export const store = configureStore({
    reducer: {
        users: AuthSlicer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type Appdistch = typeof store.dispatch;

