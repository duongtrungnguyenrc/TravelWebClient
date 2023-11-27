import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "../_types";

const initialState : UserState = {
    user: null,
    accessToken: "",
    tokenType: ""
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