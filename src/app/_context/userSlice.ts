import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "../_types";

export const initialState : UserState = {
    user: null,
    accessToken: "",
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        set: (_state, action) => {               
            return action.payload;
        },
    }
})

export const { set } = userSlice.actions;
export default userSlice.reducer;