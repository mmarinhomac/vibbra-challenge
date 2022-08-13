import { configureStore, Dispatch, AnyAction } from "@reduxjs/toolkit"
import { createWrapper } from "next-redux-wrapper"

import { systemSlice } from "./systemSlice"
import { authSlice } from "./authSlice"
import { userSlice } from "./userSlice"

const makeStore = () =>
  configureStore({
    reducer: {
      [systemSlice.name]: systemSlice.reducer,
      [authSlice.name]: authSlice.reducer,
      [userSlice.name]: userSlice.reducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false
    }),
  })

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore["getState"]>
export type AppDispatch = Dispatch<AnyAction>

export const wrapper = createWrapper<AppStore>(makeStore)
