import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authAxiosInstance, serverAxiosInstance } from "../../axios/handlerAxios";

const initialState = {
    isLogin: false,
    user: {
        accessToken: "",
        avatar: null,
        nickname: "",
        success: false,
        userId: "",
    },
};

export const updateProfileThunk = createAsyncThunk("auth/update-profile", async (payload, thunkAPI) => {
    const token = JSON.parse(localStorage.getItem("user"));
    const headers = {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token.accessToken}`,
    };
    const formData = new FormData();

    if (payload.avatar) {
        formData.append("avatar", payload.avatar);
    }
    formData.append("nickname", payload.nickname);
    try {
        console.log("프로필 변경 요청");
        const response = await authAxiosInstance.patch("/profile", formData, { headers });

        return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logIn: (state, action) => {
            localStorage.setItem("user", JSON.stringify(action.payload));

            state.user = action.payload;
            state.isLogin = true;
        },
        logOut: (state, action) => {
            localStorage.removeItem("user");
            state.isLogin = false;
            state.user = initialState.user;
        },
        signUp: (state, action) => {
            state.isLogin = true;
        },
        // setNickname: async (state, action) => {
        //     state.user.nickname = action.payload;
        //     await authAxiosInstance.patch("profile", action.payload);
        // },
        // setAvatar: (state, action) => {
        //     const formData = new FormData();
        //     formData.append("files", action.payload);
        //     console.log(formData.get("files"));
        //     state.user.avatar = action.payload;
        // },
    },
    extraReducers: (builder) => {
        builder.addCase(updateProfileThunk.fulfilled, (state, action) => {
            state.user.nickname = action.payload.nickname;
            if (action.payload.avatar) {
                state.user.avatar = action.payload.avatar;
            }
        });
    },
});

export const { logIn, logOut, signUp, setNickname, setAvatar } = authSlice.actions;
export default authSlice.reducer;
