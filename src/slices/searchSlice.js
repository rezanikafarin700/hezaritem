import { createSlice } from "@reduxjs/toolkit";

const searchSlice  = createSlice({
    name : "searchSlice",
    initialState : {
        value : ""
    },
    reducers:{
        updateSearch : (state,action)=>{
            state.value = action.payload;
            console.log('text = ',state.value);
        }
    }
});

export const { updateSearch } = searchSlice.actions;

export default searchSlice.reducer;