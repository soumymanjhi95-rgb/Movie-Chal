import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../../config/axiosInstance";

export let Movies = createAsyncThunk(
    'auth/login', 
    async (credentials, thunkApi)=>{
        try {
            let res = await axiosInstance.post("/auth/login", credentials);
            console.log(res);
            return res.data.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
});

export let CurrentMovies = createAsyncThunk("auth/me", 
    async (_, thunkApi)=>{
     try {
            let res = await axiosInstance.get("/auth/me");
            console.log(res);
            return res.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }

})