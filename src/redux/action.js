
// 액션 타입 정의
export const SET_SELECTED_ID = 'redux/SET_SELECTED_ID';
export const ADD_NEW_LETTER = 'redux/ADD_NEW_LETTER';
export const ADD_LETTER_LIST = 'redux/ADD_LETTER_LIST';

// 액션 생성자 함수 정의
export const setSelectedId = (id) => ({
  type: SET_SELECTED_ID,
  payload: id,
});

export const addNewLetter = (name, value, letterOwner) => ({
  type: ADD_NEW_LETTER,
  payload: { name, value, letterOwner },
});

export const addLetterList = (addData) => ({
  type: ADD_LETTER_LIST,
  payload: addData,
});