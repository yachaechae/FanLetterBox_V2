import React, { useEffect, useState } from "react";
import MemberData from "data/memberData";
import { FormStyle, InputStyle, SectionStyle, SelectStyle } from "style/InputFormStyle";
import { MasterBtn } from "style/MasterBtnStyle";
import { useDispatch, useSelector } from "react-redux";
import { addLetterList, addNewLetter } from "redux/slice/letter";

export default function LetterForm() {
    const letterList = useSelector((state) => state.letter.letterList);
    const letter = useSelector((state) => state.letter.letter);
    console.log(letterList);
    console.log(letter);
    const dispatch = useDispatch();
    const [letterOwner, setLetterOwner] = useState("");

    const letterInfo = (e) => {
        const { name, value } = e.target;
        console.log(name, value, letterOwner);

        const letterData = { name: name, value: value, letterOwner: letterOwner };
        dispatch(addNewLetter(letterData));
    };
    const writeForm = (event) => {
        event.preventDefault();
        const newLetter = [...letterList, { ...letter }];
        dispatch(addLetterList(newLetter));
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
                    <InputStyle
                        type="text"
                        id="nickName"
                        placeholder="닉네임을 입력해주세요 (최대 20자)"
                        name="nickName"
                        value={letter.nickName}
                        onChange={letterInfo}
                        required
                        maxLength={20}
                    />
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
