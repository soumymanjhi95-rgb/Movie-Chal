import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../features/states/AuthSlice";

let Store = configureStore({
    reducer:{
        auth: authSlice,
    },
});