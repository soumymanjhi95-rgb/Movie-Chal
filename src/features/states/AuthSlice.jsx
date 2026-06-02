import { createSlice, current } from "@reduxjs/toolkit";
let savedData = localStorage.getItem("registerData");
let savedUser = localStorage.getItem("currentUser");

export let authSlice = createSlice({
  name: "auth",
  initialState: {
    registerData: savedData ? JSON.parse(savedData) : null,
    User: savedUser ? JSON.parse(savedUser) : null,
    isAuthenticated: savedUser ? true : false,
  },
  reducers: {
    registeruserdata: (state, action) => {
      state.registerData = action.payload;
      localStorage.setItem("registerData", JSON.stringify(action.payload));
      console.log(current(state));
    },
    loginuserdata: (state, action) => {
      let { email , password } = action.payload;
      if (
        state.registerData &&
        state.registerData.email === email &&
        state.registerData.password === password
      ) {
        state.User = state.registerData;
        state.isAuthenticated = true;
        localStorage.setItem("currentUser", JSON.stringify(state.registerData));
        alert("Login Successfully");
      } else {
        alert("Invalid Email and Password");
      }
    },
    logoutuser: (state) => {
      state.User = null;
      state.isAuthenticated = false;
      localStorage.removeItem("currentUser");
      alert("Logout Successfully");
    },
  },
});

export let { registeruserdata, loginuserdata , logoutuser } = authSlice.actions;
export default authSlice.reducer;