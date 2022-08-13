import { configureStore, AnyAction, Dispatch } from "@reduxjs/toolkit"
import { createWrapper } from "next-redux-wrapper"

import { authSlice } from "./authSlice"
import { systemSlice } from "./systemSlice"

const makeStore = () =>
  configureStore({
    reducer: {
      [authSlice.name]: authSlice.reducer,
      [systemSlice.name]: systemSlice.reducer,
    },
    devTools: true,
  })

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore["getState"]>
export type AppDispatch = Dispatch<AnyAction>

export const wrapper = createWrapper<AppStore>(makeStore)
