import { configureStore } from "@reduxjs/toolkit";
import member from "./slice/member";
import letter from "./slice/letter";
import auth from "./slice/auth";

const store = configureStore({
    reducer: { member: member, letter: letter, auth: auth },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
