import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import loginReducer from "../features/login/loginSlice"
export const store = configureStore({
    reducer:{
        login : loginReducer
    }
})

// Infer the type of `store`
export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore['dispatch']
// Define a reusable type describing thunk functions
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>