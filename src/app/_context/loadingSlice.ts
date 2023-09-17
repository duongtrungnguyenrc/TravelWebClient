import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
    name: 'loading',
    initialState: true,
    reducers: {
        toggleLoading: (state) => {
            return !state;
        },
    }
})

export const { toggleLoading } = loadingSlice.actions;
export default loadingSlice.reducer;