import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Anchor, HeaderContainer, LayoutHeader } from "style/HeaderStyle";

export default function Layout({ children }) {
    const navigate = useNavigate();

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
                        <Anchor value="home">LOGOUT</Anchor>
                    </div>
                </HeaderContainer>
            </LayoutHeader>
            <Outlet />
        </>
    );
}
