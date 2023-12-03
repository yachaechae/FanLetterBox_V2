import React from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { logOut } from "redux/slice/auth";
import { Anchor, HeaderContainer, LayoutHeader } from "style/HeaderStyle";

export default function Layout({ children }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onLogOut = () => {
        dispatch(logOut());
    };

    return (
        <>
            <LayoutHeader>
                <HeaderContainer>
                    <Anchor
                        onClick={() => {
                            navigate("/");
                        }}
                    >
                        HOME
                    </Anchor>
                    <div className="member">
                        <Anchor
                            onClick={() => {
                                navigate("/profile");
                            }}
                        >
                            MY PROFILE
                        </Anchor>
                        <Anchor value="home" onClick={onLogOut}>
                            LOGOUT
                        </Anchor>
                    </div>
                </HeaderContainer>
            </LayoutHeader>
            <Outlet />
        </>
    );
}
