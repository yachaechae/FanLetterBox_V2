import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    selectedId: "",
};
const memberIdSlice = createSlice({
    name: "memberId",
    initialState,
    reducers: {
        // 리듀서 안에서 만든 함수 자체가 리듀서의 로직이자, 액션크리에이터가 된다.
        selectedMemberId: (state, action) => {
            console.log(action.payload);
            state.selectedId = action.payload;
        },
    },
});

export const { selectedMemberId } = memberIdSlice.actions;
export default memberIdSlice.reducer;
