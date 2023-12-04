import React, { useEffect, useRef, useState } from "react";
import { PiUserCircleThin } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { setAvatar, setNickname, updateProfileThunk, updateUserProfile, uploadAvatar } from "redux/slice/auth";
import { LetterOptions } from "style/DetailStyles";
import { InputStyle } from "style/InputFormStyle";
import { ProfileIcon } from "style/LetterListStyle";
import { MasterBtn } from "style/MasterBtnStyle";
import { EditBox, ProfileContainer } from "style/ProfileStyle";

export default function Profile() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);

    const [isEditMode, setEditMode] = useState(false);
    const [editedNickname, setEditedNickname] = useState(user.nickname);
    const [selectedFile, setSelectedFile] = useState(null);
    const [currentImg, setCurrentImg] = useState(user.avatar);
    const imageInputRef = useRef(null);

    const EditMode = () => {
        setEditMode(true);
    };

    const cancelClick = () => {
        setEditMode(false);
        setEditedNickname(user.nickname);
    };
    const validationCheck = (str, range) => {
        if (range[0] <= str.length && str.length <= range[1]) {
            return true;
        } else {
            return false;
        }
    };
    const handleChangeProfile = () => {
        if (!validationCheck(editedNickname, [1, 10])) {
            toast.warning("닉네임을 1~10글자 사이로 입력해주세요.");
            return;
        }

        console.log(imageInputRef.current.files[0]);

        dispatch(updateProfileThunk({ nickname: editedNickname, avatar: imageInputRef.current.files[0] }));

        setEditMode(false);
    };

    const uploadAvatar = (e) => {
        const file = e.currentTarget.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedFile(reader.result);
                setCurrentImg(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleChangeImage = () => {
        imageInputRef.current.click();
    };

    useEffect(() => {
        if (!isEditMode) {
            setSelectedFile(null);
        }
    }, [isEditMode]);

    return (
        <ProfileContainer>
            <ProfileIcon
                className="profile"
                as="label"
                /* htmlFor="fileInput" */
                onClick={handleChangeImage}
                style={{ cursor: isEditMode ? "pointer" : "auto" }}
            >
                {!currentImg ? (
                    <PiUserCircleThin className="icon" size="150" fill="#fff" />
                ) : (
                    <img src={selectedFile || user.avatar} alt="Profile Avatar" />
                )}
            </ProfileIcon>
            <EditBox>
                {isEditMode ? (
                    <>
                        <InputStyle
                            type="text"
                            value={editedNickname}
                            onChange={(e) => setEditedNickname(e.target.value)}
                        />
                        <InputStyle
                            type="file"
                            id="fileInput"
                            accept="image/*"
                            ref={imageInputRef}
                            onChange={uploadAvatar}
                            style={{ display: "none" }}
                        />
                    </>
                ) : (
                    <>
                        <p>아이디 : {user.userId}</p>
                        <p>닉네임 : {user.nickname}</p>
                    </>
                )}
            </EditBox>
            <div>
                {isEditMode ? (
                    <LetterOptions>
                        <MasterBtn $bgColor="#8A1E00" $fontColor="#fff" onClick={cancelClick}>
                            취소
                        </MasterBtn>
                        <MasterBtn
                            onClick={handleChangeProfile}
                            disabled={user.nickname === editedNickname && !selectedFile}
                        >
                            확인
                        </MasterBtn>
                    </LetterOptions>
                ) : (
                    <MasterBtn onClick={EditMode}>프로필 수정</MasterBtn>
                )}
            </div>
        </ProfileContainer>
    );
}
