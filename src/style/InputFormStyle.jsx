import styled from "styled-components"


export const FormStyle = styled.form`
    margin: 50px auto;
    width: 500px;
    border: 1px solid #000;
    padding: 1rem 1.5rem;
    text-align: right;
`
export const SectionStyle = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 20px;
    & > * {
        font-size: 1rem !important;
    }
`

export const InputStyle = styled.input`
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
    &.content{
        height: 100px;
    }
    &[type="text"]{
        width: 70%;
        resize: none;
    }
`

export const SelectStyle = styled.select`
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
`
