import React, { useEffect } from "react";
import { PiUserCircleThin } from "react-icons/pi";
import memberData from "data/memberData";
import { LetterBox, Message, ProfileIcon, ProfileText, Sender } from "style/LetterListStyle";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchLetterList } from "redux/slice/letter";

export default function LetterList() {
    const selectedId = useSelector((state) => state.member.selectedId);
    const letterList = useSelector((state) => state.letter.letterList);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchLetterList());
    }, [selectedId]);
    let letterData = letterList;
    if (selectedId) {
        const selectedName = memberData.filter((member) => member.id === selectedId)[0].name;
        const selectedList = letterList.filter((letters) => letters.writeTo === selectedName);
        if (selectedList.length === 0) {
            return (
                <LetterBox $border="0">
                    <h2>
                        {selectedName}의 편지함이 비어있어요!
                        <br />
                        지금 바로 작성해주세요!
                    </h2>
                </LetterBox>
            );
        } else {
            letterData = selectedList;
        }
    } else {
        letterData = letterList;
    }
    console.log(letterList);
    console.log(letterData.length);
    console.log(letterData.length !== 0);
    return letterData.length !== 0 ? (
        <LetterBox>
            {letterData.map((letter) => {
                return (
                    <Link to={`/detail/${letter.id}`} key={letter.id}>
                        <Sender>
                            <ProfileIcon>
                                <PiUserCircleThin className="icon" size="70" fill="#fff" />
                            </ProfileIcon>
                            <ProfileText>
                                <div className="textArea">
                                    <h6>{letter.nickName}</h6>
                                    <span>{letter.createdAt}</span>
                                </div>
                                <Message>
                                    <p>{letter.content}</p>
                                </Message>
                            </ProfileText>
                        </Sender>
                    </Link>
                );
            })}
        </LetterBox>
    ) : (
        <>
            <LetterBox $border="0">
                <h2>
                    편지함이 비어있어요!
                    <br />
                    지금 바로 작성해주세요!
                </h2>
            </LetterBox>
        </>
    );
}
