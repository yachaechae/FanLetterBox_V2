import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
    letterList: [],
    letter: { nickName: "", content: "", letterId: "", createdAt: "", writeTo: "" },
};

const letterSlice = createSlice({
    name: "letter",
    initialState,
    reducers: {
        addNewLetter: (state, action) => {
            const { name, value, letterOwner } = action.payload;
            console.log(action);
            console.log(name, value, letterOwner);
            state.letter = {
                ...state.letter,
                [name]: value,
                letterId: uuidv4(),
                createdAt: new Date().toLocaleString(),
                writeTo: letterOwner,
            };
        },
        addLetterList: (state, action) => {
            const addData = action.payload;
            localStorage.setItem("letterList", JSON.stringify(addData));
            state.letterList = addData;
            state.letter = {
                nickName: "",
                content: "",
                letterId: "",
                createdAt: "",
                writeTo: "",
            };
        },

        selectMember: (state, action) => {
            const selectedMemberName = action.payload.memberName;
            state.selectedMemberName = selectedMemberName;
        },
    },
});

export const { addNewLetter, addLetterList } = letterSlice.actions;
export default letterSlice.reducer;
