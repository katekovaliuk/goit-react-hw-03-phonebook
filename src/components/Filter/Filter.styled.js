import styled from "styled-components";

export const FilterBox = styled.div`
display: flex;
flex-direction: column;
`

export const FilterLabel = styled.label`
text-align: start;
font-size: 24px;
// font-weight: bold;
margin-top: 10px;
margin-bottom: 10px;
`

export const FilterInput = styled.input`
width: 250px;
height: 40px;
font-size: 20px;
margin-bottom: 20px;

:hover,
:focus{
    border: 2px solid grey;
}

`