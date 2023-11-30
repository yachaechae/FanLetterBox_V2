import styled from "styled-components"

export const ModalContainer = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-self: center;
    align-items: center;
`
export const ModalOverlay = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
`
export const ModalContent = styled.div`
    position: relative;
    top: 0px;
    margin: 0 auto;
    border-radius: 25px 0 25px 0;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    background-color: white;
    text-align: center;
    width: 50%;
    height: 35vh;
`
export const ModalHeader = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 1.5em;
    background-color: #fafafa;
    width: 100%;
    overflow: auto;
    height: 10%;    
    border-radius: 25px 0 0 0;
    padding: 0 1rem 0 0;
`
export const ModalBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 90%;
    & h3{
        font-size:1.5rem;
    }
    & [type="text"]{
        font-size: 1.5rem;
        line-height: 1.2;
        height: 60%;
    }
`