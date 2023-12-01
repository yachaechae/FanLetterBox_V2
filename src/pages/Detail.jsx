import Modal from "components/global/Modal";
import React, { useState } from "react";
import { PiUserCircleThin } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addLetterList } from "redux/action";
import { LetterBody, LetterFooter, LetterHeader, LetterOptions, ViewLetter } from "style/DetailStyles";
import { InputStyle } from "style/InputFormStyle";
import { ProfileIcon } from "style/LetterListStyle";
import { MasterBtn } from "style/MasterBtnStyle";

export default function Detail() {
    const navigate = useNavigate();
    const letterId = useParams().id;

    const letterList = useSelector((state) => state.letterList);
    const dispatch = useDispatch();

    const currentLetter = letterList.find((letter) => letter.letterId === letterId);

    const letterNickName = currentLetter.nickName;

    const [deleteModal, setDeleteModal] = useState(false);
    const [updateModal, setUpdateModal] = useState(false);
    const [nickName, setNickName] = useState("");
    const [editContent, setEditContent] = useState(currentLetter.content);

    const closeDeleteModal = () => setDeleteModal(false);
    const closeUpdateModal = () => setUpdateModal(false);

    const handleBtn = (e) => {
        const btnType = e.target.value;
        btnType === "delete" ? setDeleteModal(true) : setUpdateModal(true);
    };
    const checkNickName = (e) => {
        setNickName(e.target.value);
    };
    const editLetter = (e) => {
        setEditContent(e.target.value);
    };
    const deleteLetter = () => {
        const filtered = letterList.filter((letters) => letters.nickName !== letterNickName);
        if (letterNickName === nickName) {
            dispatch(addLetterList(filtered));
            closeDeleteModal();
            navigate("/");
        } else alert("닉네임을 확인해주세요!");
    };
    const updateLetter = () => {
        if (currentLetter.content !== editContent) {
            const editedLetter = letterList.map((letters) => {
                if (letters.letterId === currentLetter.letterId) {
                    letters.content = editContent;
                    letters.createdAt = new Date().toLocaleString();
                }
                return letters;
            });
            dispatch(addLetterList(editedLetter));
            closeUpdateModal();
        } else {
            alert("수정된 내용이 없습니다.");
            closeUpdateModal();
        }
    };
    return (
        <>
            <ViewLetter>
                <MasterBtn as="a" href={"/"}>
                    홈으로
                </MasterBtn>
                <div className="letter">
                    <LetterHeader>To. {currentLetter.writeTo}</LetterHeader>

                    <LetterBody>{currentLetter.content}</LetterBody>

                    <LetterFooter>
                        <ProfileIcon>
                            <PiUserCircleThin className="icon" size="40" fill="#fff" />
                        </ProfileIcon>
                        From. {currentLetter.nickName}
                        <br />
                        {currentLetter.createdAt}
                    </LetterFooter>
                    <LetterOptions>
                        <MasterBtn value="update" onClick={handleBtn}>
                            수정
                        </MasterBtn>
                        <MasterBtn $bgColor="#8A1E00" $fontColor="#fff" value="delete" onClick={handleBtn}>
                            삭제
                        </MasterBtn>
                    </LetterOptions>
                </div>
            </ViewLetter>
            <Modal isOpen={deleteModal} closeModal={closeDeleteModal}>
                <h3>삭제 하시려면 닉네임을 입력해주세요</h3>
                <InputStyle type="text" placeholder="닉네임을 적어주세요" value={nickName} onChange={checkNickName} />
                <LetterOptions>
                    <MasterBtn onClick={closeDeleteModal}>취소</MasterBtn>
                    <MasterBtn $bgColor="#8A1E00" $fontColor="#fff" onClick={deleteLetter}>
                        삭제
                    </MasterBtn>
                </LetterOptions>
            </Modal>
            <Modal isOpen={updateModal} closeModal={closeUpdateModal}>
                <h3>수정하실 내용을 입력해주세요</h3>
                <InputStyle as="textarea" type="text" value={editContent} onChange={editLetter} />
                <LetterOptions>
                    <MasterBtn onClick={closeUpdateModal}>취소</MasterBtn>
                    <MasterBtn onClick={updateLetter}>확인</MasterBtn>
                </LetterOptions>
            </Modal>
        </>
    );
}
