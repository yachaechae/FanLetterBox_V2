import styled from "styled-components";

export const LoginContainer = styled.div`
    width: 500px;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    border: 1px solid #000;
    padding: 1rem 1.5rem;

    & h2 {
        font-size: 1.5rem;
        margin: 1rem 0 1.5rem;
        -webkit-text-stroke: 1px #000;
    }
`;
export const ButtonBox = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 2rem;
`;
