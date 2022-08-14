import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AppState } from '../store'

type IUser = {
  name: string | null
}

export interface UserState {
  user: IUser
}

const initialState: UserState = {
  user: {
    name: null,
  },
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(
      state: UserState,
      action: PayloadAction<{
        name: string
      }>
    ) {
      state.user.name = action.payload.name
    },
  },
})

export const { setUser } = userSlice.actions

export const selectUserData = (state: AppState) => state.user

export default userSlice.reducer
