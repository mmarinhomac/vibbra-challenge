import { configureStore, AnyAction, Dispatch } from "@reduxjs/toolkit"
import { authSlice } from "./authSlice"
import { createWrapper } from "next-redux-wrapper"

const makeStore = () =>
  configureStore({
    reducer: {
      [authSlice.name]: authSlice.reducer,
    },
    devTools: true,
  })

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore["getState"]>
export type AppDispatch = Dispatch<AnyAction>

export const wrapper = createWrapper<AppStore>(makeStore)
