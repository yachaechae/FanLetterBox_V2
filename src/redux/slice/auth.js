const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    isLogin: false,
    token: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logIn: (state, action) => {
            localStorage.setItem("token", action.payload);

            state.token = action.payload;
            state.isLogin = true;
        },
        signUp: (state, action) => {
            // 회원가입 성공 시 상태를 변경하는 로직 추가
            state.isLogin = true;
        },
    },
});

export const { logIn, signUp } = authSlice.actions;
export default authSlice.reducer;
