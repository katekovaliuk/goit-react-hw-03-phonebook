import styled from "styled-components";

export const FormBox = styled.form`
    display: flex;
    flex-direction: column;
    width: 500px;
    // align-items: center;
    padding: 20px;
    border: 1px solid grey;
    border-radius: 5px;
`

export const Label = styled.label`
text-align: start;
font-size: 24px;
font-weight: bold;
margin-bottom: 10px;
`

export const Input = styled.input`
width: 250px;
height: 40px;
font-size: 20px;
margin-bottom: 20px;

// border-radius: 4px;

:hover,
:focus{
    border: 2px solid grey;
}
`
export const FormButton = styled.button`
padding: 5px 10px;
width: 200px;

border: 1px;
border-radius: 5px;
box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),
1px 4px 6px rgb(0 0 0 / 16%);

margin-left: 24px;

background-color: #d9e1d475;

font-size: 20px;
cursor: pointer;
transition: transform 250ms linear;

:hover{
    background-color: #c3c8c0;
    transform: scale(1.1);
}
`

