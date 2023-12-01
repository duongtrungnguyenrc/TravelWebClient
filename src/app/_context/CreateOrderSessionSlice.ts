import { createSlice } from "@reduxjs/toolkit";

const createOrderSessionSlice = createSlice({
    name: 'createOrderSessionStatus',
    initialState: "",
    reducers: {
        set: (_state, action) => {               
            return action.payload;
        },
    }
})

export const { set } = createOrderSessionSlice.actions;
export default createOrderSessionSlice.reducer;