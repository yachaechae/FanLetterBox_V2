import styled from "styled-components";

export const LayoutHeader = styled.header`
    background: #524439;
`;
export const HeaderContainer = styled.div`
    width: 800px;
    margin: 0 auto;
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;

    & .member {
        display: flex;
        gap: 2rem;
    }
`;
export const Anchor = styled.div`
    cursor: pointer;
    font-size: 1.5rem;
    color: #fff;
`;

export const HeaderStyles = styled.div`
    position: relative;
    width: 100%;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    &::before {
        position: absolute;
        top: 0;
        content: "";
        background: url(https://lv2-cdn.azureedge.net/day6/381be0f8941d40bc952d18aee73ab0c1-%EB%8B%A8%EC%B2%B4%201.jpg),
            linear-gradient(126deg, #a5682b, #a5682b, #ecde61);
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        filter: blur(3px);
        z-index: -1;
        transform: scale(1.1);
    }
`;
export const Title = styled.div`
    font-family: "SUITE-Regular";
    font-weight: bold;
    text-align: center;
    font-size: 2.5rem;
    color: #fff;
    text-shadow: -1px 0px #fff, 0px 1px #fff, 1px 0px #fff, 0px -1px #fff;
`;
export const MemberList = styled.div`
    text-align: center;
    border: 1px solid #fff;
    width: fit-content;
    padding: 0.5rem 1rem;
    background: #000000cc;
`;
