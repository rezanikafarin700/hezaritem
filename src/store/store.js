import { configureStore } from "@reduxjs/toolkit";
import productSlice from '../slices/productSlice'
import searchSlice from "../slices/searchSlice";
const store = configureStore({
    reducer:{
        searchSlice,
        productSlice
    }
});

export default store;
