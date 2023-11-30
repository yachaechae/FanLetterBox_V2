// reducer.js

import { v4 as uuidv4 } from "uuid";
import { SET_SELECTED_ID, ADD_NEW_LETTER, ADD_LETTER_LIST } from './action';

const initialState = {
  selectedId: "",
  letterList: [],
  letter: { nickName: "", content: "", letterId: "", createdAt: "", writeTo: "" },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_ID:
      return { ...state, selectedId: action.payload };

    case ADD_NEW_LETTER:
      const { name, value, letterOwner } = action.payload;
      return {
        ...state,
        letter: {
          ...state.letter,
          [name]: value,
          letterId: uuidv4(),
          createdAt: new Date().toLocaleString(),
          writeTo: letterOwner,
        },
      };

    case ADD_LETTER_LIST:
      const addData = action.payload;
      localStorage.setItem("letterList", JSON.stringify(addData));
      return { ...state, letterList: addData, letter: { nickName: "", content: "", letterId: "", createdAt: "", writeTo: "" } };

    default:
      return state;
  }
};

export default rootReducer;
