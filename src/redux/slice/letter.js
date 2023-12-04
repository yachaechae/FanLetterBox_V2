import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { serverAxiosInstance } from "../../axios/handlerAxios";
import { v4 as uuidv4 } from "uuid";

const initialState = {
    letterList: [],
    letter: { id: "", nickName: "", content: "", avatar: "", writeTo: "", createdAt: "", userId: "" },
};

export const fetchLetterList = createAsyncThunk("letter/fetchLetterList", async (_, thunkAPI) => {
    const response = await serverAxiosInstance.get("/letterList?_sort=createdAt&_order=asc");
    return response.data;
});

export const addLetterThunk = createAsyncThunk("letter/sendLetter", async (letter, thunkAPI) => {
    await serverAxiosInstance.post("/letterList", letter);
    thunkAPI.dispatch(addLetterList([letter]));
});

export const deleteLetterThunk = createAsyncThunk("letter/deleteLetterThunk", async ({ id }, thunkAPI) => {
    await serverAxiosInstance.delete(`/letterList/${id}`);
    return { id };
});

export const updateLetterThunk = createAsyncThunk("letter/updateLetterThunk", async ({ id, content }, thunkAPI) => {
    await serverAxiosInstance.patch(`/letterList/${id}`, { content });
    return { id, content };
});

const letterSlice = createSlice({
    name: "letter",
    initialState,
    reducers: {
        addNewLetter: (state, action) => {
            const { name, value, letterOwner, nickName, avatar, userId } = action.payload;
            console.log(action);
            console.log(name, value, letterOwner, nickName, avatar, userId);
            state.letter = {
                ...state.letter,
                [name]: value,
                id: uuidv4(),
                createdAt: new Date().toLocaleString(),
                writeTo: letterOwner,
                nickName: nickName,
                avatar: avatar,
                userId: userId,
            };
        },
        addLetterList: (state, action) => {
            localStorage.setItem("letterList", JSON.stringify(action.payload));
            state.letterList = action.payload;
            state.letter = initialState.letter;
        },
    },
    extraReducers: {
        [fetchLetterList.fulfilled]: (state, action) => {
            localStorage.setItem("letterList", JSON.stringify(action.payload));
            state.letterList = action.payload;
            state.isLoading = false;
        },
    },
});

export const { addNewLetter, addLetterList } = letterSlice.actions;
export default letterSlice.reducer;
