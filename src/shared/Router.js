import Login from "pages/Login";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addLetterList } from "redux/slice/letter";
import Profile from "pages/Profile";
import Layout from "components/Layout";
import { logIn, logOut } from "redux/slice/auth";

export default function Router() {
    const dispatch = useDispatch();
    const isLogin = useSelector((state) => state.auth.isLogin);
    const userInfo = useSelector((state) => state.auth.user);
    const [letterList, setLetterList] = useState([]);
    useEffect(() => {
        const saveLocalStorage = JSON.parse(localStorage.getItem("letterList"));
        const user = JSON.parse(localStorage.getItem("user"));
        if (isLogin) {
        }
        if (user) {
            if (saveLocalStorage) {
                dispatch(addLetterList(saveLocalStorage));
            }
            dispatch(logIn(user));
            setLetterList(saveLocalStorage);
        } else {
            dispatch(logOut());
        }
    }, []);
    return (
        <BrowserRouter>
            <Routes>
                {isLogin ? (
                    <Route element={<Layout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/detail/:id" element={<Detail />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/profile" element={<Profile />} />
                    </Route>
                ) : (
                    <Route path="*" element={<Login />} />
                )}
            </Routes>
        </BrowserRouter>
    );
}
