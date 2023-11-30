const { default: styled } = require("styled-components");

export const LetterBox = styled.div`

    width: 500px;
    border: solid #000 ${(props) => props.$border || "1"}px;
    margin: 0 auto 5rem;

    & h2{
        text-align: center;
        font-size: 2rem;
        font-weight: bold;
        line-height: 1.5;
    }
`


export const Sender = styled.div`
    padding: 1rem 1.5rem;
    display: flex;
    justify-content: space-between;
`
export const ProfileIcon = styled.div`
    & .icon{
       background: linear-gradient(to right, #57c3c5, #093B6C);
       border-radius: 50%;
    }
    & .icon path {
        transform: scale(1.3);
        transform-origin: center;
    }
`
export const ProfileText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: calc(100% - 100px);
    height: 100px;
    & > .textArea{
        width: 100%;
        height: 70px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        font-size: 1rem;
    }
    & > div > h6{
        font-size:1.5rem;
        line-height: 1.2;
    }
`

export const Message = styled.div`
    background: #494848;
    color: #fff;
    font-size: 1.5rem;
    position: relative;
    border-radius: 5px;
    &::after{
        content: "";
        position: absolute;
        left: -10px;
        top: 0;
        width: 0;
        height: 0;
        border: 15px solid transparent;
        border-right-color: #494848;
        border-left: 0;
        border-top: 0;
    }
    & p{
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 0.5rem 1rem;
        line-height: 1.5;
    }
`