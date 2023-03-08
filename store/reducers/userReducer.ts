import { createSlice } from "@reduxjs/toolkit";
import Cookie from "js-cookie";
const initialState = {
  users: Cookie.get("isLoggedIn") ? JSON.parse(Cookie.get("user")) : null,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { addUser } = userSlice.actions;

export const selectUser = (state: any) => state.users.users;
export default userSlice.reducer;
