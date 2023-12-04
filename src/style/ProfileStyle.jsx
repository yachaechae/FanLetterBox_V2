import styled from "styled-components";

export const ProfileContainer = styled.div`
    width: 500px;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    border: 1px solid #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 2rem 0;

    & .profile {
        width: 150px;
        height: 150px;
    }
    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
    }
`;
export const EditBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    font-size: 1.2rem;
`;
