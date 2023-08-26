import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dataUser: {},
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            const data = action.payload;
            state.dataUser = data;
        },
    },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
