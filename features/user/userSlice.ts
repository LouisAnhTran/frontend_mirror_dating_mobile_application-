import { createSlice, PayloadAction  } from "@reduxjs/toolkit"
import type { RootState } from "../../store/store" // adjust the import path as needed

interface UserState {
  phoneNumber: string
}

const initialState: UserState = {
  phoneNumber: "",
}

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    populateUserPhoneNumber: (state, action: PayloadAction<string>) => {
      state.phoneNumber = action.payload;
    },
    // changeModalSignUp: state => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.openSignup = !state.openSignup
    // },
    // changeModalSignIn: state => {
    //   state.openLogin = !state.openLogin
    // },
  },
})

export const { populateUserPhoneNumber } = userSlice.actions

export const getUserPhoneNumber = (state: RootState): string =>
  state.users.phoneNumber

export default userSlice.reducer