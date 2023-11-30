import Detail from "../pages/Detail";
import Home from "../pages/Home";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Router() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>
        </Routes>
    </BrowserRouter>
    )
}


