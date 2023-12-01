import axiosInstance from "../axios/handlerAxios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logIn } from "redux/slice/auth";
import { InputStyle, SectionStyle } from "style/InputFormStyle";
import { ButtonBox, LoginContainer } from "style/LoginStyles";
import { MasterBtn } from "style/MasterBtnStyle";

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isLoginMode, setIsLoginMode] = useState(true);

    const [inputValue, setInputValue] = useState({
        id: "",
        password: "",
        nickName: "",
    });

    const toggleLoginMode = (event) => {
        event.preventDefault();
        setIsLoginMode(!isLoginMode);
    };

    const loginInfo = (e) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value,
        });
    };
    const validationCheck = (str, range) => {
        if (range[0] <= str.length && str.length <= range[1]) {
            return true;
        } else {
            return false;
        }
    };

    const login = (event) => {
        event.preventDefault();
        if (!validationCheck(inputValue.id, [4, 10])) {
            toast.warning("아이디를 4~10글자 사이로 입력해주세요.");
            return;
        }
        if (!validationCheck(inputValue.password, [4, 15])) {
            toast.warning("비밀번호를 4~15글자 사이로 입력해주세요.");
            return;
        }

        axiosInstance.post("/login", inputValue).then((res) => {
            toast("로그인 완료!");
            dispatch(logIn(res.data.accessToken));
            navigate("/");
        });
    };
    const signUp = (event) => {
        event.preventDefault();
        if (!validationCheck(inputValue.id, [4, 10])) {
            toast.warning("아이디를 4~10글자 사이로 입력해주세요.");
            return;
        }
        if (!validationCheck(inputValue.password, [4, 15])) {
            toast.warning("비밀번호를 4~15글자 사이로 입력해주세요.");
            return;
        }
        if (!validationCheck(inputValue.nickName, [1, 10])) {
            toast.warning("닉네임을 1~10글자 사이로 입력해주세요.");
            return;
        }
        axiosInstance.post("/register", inputValue).then((res) => {
            toast("회원가입 완료!");
            navigate("/");
        });
        setIsLoginMode(true);
    };

    return (
        <>
            <LoginContainer as="form">
                <h2>{isLoginMode ? "LOGIN" : "SIGN UP"}</h2>
                <SectionStyle>
                    <InputStyle as="label" htmlFor="id">
                        아이디
                    </InputStyle>
                    <InputStyle
                        type="text"
                        id="id"
                        placeholder="아이디를 입력해주세요 (4~10글자)"
                        name="id"
                        value={inputValue.id}
                        onChange={loginInfo}
                        required
                        minLength={4}
                        maxLength={10}
                    />
                </SectionStyle>
                <SectionStyle>
                    <InputStyle as="label" htmlFor="password">
                        비밀번호
                    </InputStyle>
                    <InputStyle
                        type="password"
                        id="password"
                        placeholder="비밀번호를 입력해주세요 (4~15글자)"
                        name="password"
                        value={inputValue.password}
                        onChange={loginInfo}
                        required
                        minLength={4}
                        maxLength={15}
                        autoComplete="on"
                    />
                </SectionStyle>
                {!isLoginMode && (
                    <>
                        <SectionStyle>
                            <InputStyle as="label" htmlFor="nickName">
                                닉네임
                            </InputStyle>
                            <InputStyle
                                type="text"
                                id="nickName"
                                placeholder="닉네임을 입력해주세요 (1~10글자)"
                                name="nickName"
                                value={inputValue.nickName}
                                onChange={loginInfo}
                                required
                                minLength={1}
                                maxLength={10}
                            />
                        </SectionStyle>
                    </>
                )}

                <ButtonBox>
                    <MasterBtn $bgColor="#141A29" $fontColor="#fff" onClick={toggleLoginMode}>
                        {isLoginMode ? "SIGN UP" : "LOGIN"}
                    </MasterBtn>
                    {isLoginMode ? (
                        <MasterBtn onClick={login} disabled={!inputValue.id || !inputValue.password}>
                            LOGIN
                        </MasterBtn>
                    ) : (
                        <MasterBtn
                            onClick={signUp}
                            disabled={!inputValue.id || !inputValue.password || !inputValue.nickName}
                        >
                            SIGN UP
                        </MasterBtn>
                    )}
                </ButtonBox>
            </LoginContainer>
        </>
    );
}
