import React, { useEffect, useState } from "react";
import { PiUserCircleThin } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchLetterList, deleteLetterThunk, updateLetterThunk } from "redux/slice/letter"; // Import thunks
import { LetterBody, LetterFooter, LetterHeader, LetterOptions, ViewLetter } from "style/DetailStyles";
import { InputStyle } from "style/InputFormStyle";
import { ProfileIcon } from "style/LetterListStyle";
import { MasterBtn } from "style/MasterBtnStyle";
import Modal from "components/global/Modal";
import { toast } from "react-toastify";

export default function Detail() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id: letterId } = useParams();
    const userId = useSelector((state) => state.auth.user.userId);
    const currentLetter = useSelector((state) => state.letter.letterList.find((letter) => letter.id === letterId));

    const [deleteModal, setDeleteModal] = useState(false);
    const [updateModal, setUpdateModal] = useState(false);
    const [nickName, setNickName] = useState("");
    const [editContent, setEditContent] = useState(currentLetter?.content);

    useEffect(() => {
        dispatch(fetchLetterList());
    }, [dispatch]);

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

    const deleteLetter = async () => {
        if (currentLetter.nickName === nickName) {
            await dispatch(deleteLetterThunk({ id: currentLetter.id }));
            setDeleteModal(false);
            navigate("/");
        } else {
            toast.warning("닉네임을 확인해주세요!");
        }
    };

    const updateLetter = async () => {
        if (currentLetter.content !== editContent) {
            await dispatch(updateLetterThunk({ id: currentLetter.id, content: editContent }));
            setUpdateModal(false);
        } else {
            toast.warning("수정된 내용이 없습니다.");
            setUpdateModal(false);
        }
    };
    console.log(currentLetter);
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
                    {userId === currentLetter.userId ? (
                        <LetterOptions>
                            <MasterBtn value="update" onClick={handleBtn}>
                                수정
                            </MasterBtn>
                            <MasterBtn $bgColor="#8A1E00" $fontColor="#fff" value="delete" onClick={handleBtn}>
                                삭제
                            </MasterBtn>
                        </LetterOptions>
                    ) : (
                        <></>
                    )}
                </div>
            </ViewLetter>
            <Modal isOpen={deleteModal} closeModal={() => setDeleteModal(false)}>
                <h3>삭제 하시려면 닉네임을 입력해주세요</h3>
                <InputStyle type="text" placeholder="닉네임을 적어주세요" value={nickName} onChange={checkNickName} />
                <LetterOptions>
                    <MasterBtn onClick={() => setDeleteModal(false)}>취소</MasterBtn>
                    <MasterBtn $bgColor="#8A1E00" $fontColor="#fff" onClick={deleteLetter}>
                        삭제
                    </MasterBtn>
                </LetterOptions>
            </Modal>
            <Modal isOpen={updateModal} closeModal={() => setUpdateModal(false)}>
                <h3>수정하실 내용을 입력해주세요</h3>
                <InputStyle as="textarea" type="text" value={editContent} onChange={editLetter} />
                <LetterOptions>
                    <MasterBtn onClick={() => setUpdateModal(false)}>취소</MasterBtn>
                    <MasterBtn onClick={updateLetter}>확인</MasterBtn>
                </LetterOptions>
            </Modal>
        </>
    );
}
