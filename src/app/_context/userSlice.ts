import { createSlice } from "@reduxjs/toolkit";

// Xác định kiểu dữ liệu cho state
interface User {
    id: number;
    name: string;
    // Thêm các trường dữ liệu khác tùy ý
  }

const userSlice = createSlice({
    name: 'users',
    initialState: [] as User[],
    reducers: {
        addUsers: (state, action) => {
            state.push(action.payload);
        },
    }
})

export const { addUsers } = userSlice.actions;
export default userSlice.reducer;