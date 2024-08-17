import { configureStore } from "@reduxjs/toolkit";
import productSlice from '../slices/productSlice'
import searchSlice from "../slices/searchSlice";
import searchUserSlice from "../slices/searchUserSlice";
import userSlice from "../slices/userSlice";
const store = configureStore({
    reducer:{
        searchSlice,
        productSlice,
        searchUserSlice,
        userSlice
    }
});

export default store;
