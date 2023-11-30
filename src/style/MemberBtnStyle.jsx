import styled from "styled-components";

export const ButtonStyles = styled.button`
border:none;
background:  ${(props) => props.$bgColor};
font-size: 1.5rem;
cursor:pointer;
height:35px;
padding: 0 1rem;
padding-right: ${(props) => props.$paddingRight};
vertical-align: middle;
color: ${(props)=>props.$fontColor};
position: relative;

&:hover {
	background:  ${(props) => props.$colorCode};
	color: #fff;
}
&::after{
	position: absolute;
	top: 3px;
	right: 10px;
	content: ${(props) => props.$addEmoji || ''};
}
`