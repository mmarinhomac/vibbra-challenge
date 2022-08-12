import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { AppState } from "../store"

export interface AuthState {
  authState: boolean
}

const initialState: AuthState = {
  authState: false,
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signInAction(state: AuthState, action: PayloadAction<boolean>) {
      state.authState = action.payload
    },
  }
})

export const { signInAction } = authSlice.actions

export const selectAuthState = (state: AppState) => state.auth.authState

export default authSlice.reducer
