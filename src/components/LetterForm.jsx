import React, { useEffect, useState } from "react";
import MemberData from "data/memberData";
import { FormStyle, InputStyle, SectionStyle, SelectStyle } from "style/InputFormStyle";
import { MasterBtn } from "style/MasterBtnStyle";
import { useDispatch, useSelector } from "react-redux";
import { addLetterList, addNewLetter, addLetterThunk } from "redux/slice/letter";
import { authAxiosInstance, serverAxiosInstance } from "../axios/handlerAxios";
import { logOut } from "redux/slice/auth";

export default function LetterForm() {
    const letterList = useSelector((state) => state.letter.letterList);
    const letter = useSelector((state) => state.letter.letter);
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    const [letterOwner, setLetterOwner] = useState("");

    const letterInfo = (e) => {
        const { name, value } = e.target;
        const letterData = {
            name: name,
            value: value,
            letterOwner: letterOwner,
            nickName: user.nickname,
            avatar: user.avatar,
            userId: user.userId,
        };
        dispatch(addNewLetter(letterData));
    };

    const writeForm = (event) => {
        event.preventDefault();
        dispatch(addLetterThunk(letter));
    };

    useEffect(() => {}, [letterOwner]);

    return (
        <>
            <FormStyle onSubmit={writeForm}>
                <SectionStyle>
                    <InputStyle as="label" htmlFor="">
                        누구에게 보내시나요?
                    </InputStyle>
                    <SelectStyle
                        name="memberList"
                        id="memberList"
                        onChange={(e) => {
                            setLetterOwner(e.target.value);
                        }}
                        defaultValue=""
                        required="required"
                    >
                        <option value="" disabled>
                            멤버를 선택해주세요!
                        </option>
                        {MemberData.map((member) => {
                            return (
                                <option key={member.id} name="writeTo" value={member.name}>
                                    {member.name}
                                </option>
                            );
                        })}
                    </SelectStyle>
                </SectionStyle>

                <SectionStyle>
                    <InputStyle as="label" htmlFor="nickName">
                        닉네임
                    </InputStyle>
                    {user.nickname}
                </SectionStyle>

                <SectionStyle>
                    <InputStyle as="label" htmlFor="content">
                        내용
                    </InputStyle>
                    <InputStyle
                        as="textarea"
                        type="text"
                        id="content"
                        className="content"
                        placeholder="내용을 입력해주세요 (최대 150자)"
                        name="content"
                        value={letter.content}
                        required
                        onChange={letterInfo}
                        maxLength={150}
                    />
                </SectionStyle>

                <div>
                    <MasterBtn>팬레터보내기 🍋</MasterBtn>
                </div>
            </FormStyle>
        </>
    );
}
