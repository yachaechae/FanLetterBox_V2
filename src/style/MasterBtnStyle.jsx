import styled from "styled-components";
const defaultBgColor = "#57c3c5";
const fontColor = "#000";
export const MasterBtn = styled.button`
    cursor: pointer;
    width: fit-content;
    background: ${(props) => props.$bgColor || defaultBgColor};
    color: ${(props) => props.$fontColor || fontColor};
    padding: 0.5rem 1rem;
    border: 0;
    font-size: 1rem;
`