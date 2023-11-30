import styled from "styled-components";

export const ViewLetter = styled.div`
    width: 800px;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    display: flex;
    flex-direction: column;
    gap: 1rem;

    & .letter{
        width: 500px;
        height: 450px;
        padding: 2rem 2.5rem;
        background-color: #c3c3c3;
        margin: 0 auto;
        position: relative;
    }
    & .letter::after{
        content:''; 
        display:block;  
        position:absolute; 
        right:0; 
        bottom:0;     
        background-color: #848484;
        border-width: 0 0 40px 75px;
        border-style:solid; 
        border-color:transparent transparent #fff; 
    }
`
export const LetterHeader = styled.div`

    margin: 0 0 1.5rem; 
    font-size:2rem;
`
export const LetterBody = styled.div`
    height: calc(100% - 13.5rem);
    font-size: 1.5rem;
    white-space: normal;
    word-break: break-all;
    line-height: 1.2;
`
export const LetterFooter = styled.div`
    text-align: right;
    margin: 0.5rem 0;
    line-height: 1.5;
`
export const LetterOptions = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
`