import { createSlice } from "@reduxjs/toolkit";
import Cookie from "js-cookie";
const initialState = {
  users: Cookie.get("user") ? JSON.parse(Cookie.get("user")) : null,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users = action.payload;
    },

    logOutHandle: (state) => {
      state.users = null;
      Cookie.remove("user");
      Cookie.remove("cart");
      Cookie.set("isLoggedIn", false);
    },
  },
});

export const { addUser, logOutHandle } = userSlice.actions;

export const selectUser = (state: any) => state.users.users;
export default userSlice.reducer;
