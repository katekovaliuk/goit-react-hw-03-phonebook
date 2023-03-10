import styled from 'styled-components';

export const ContactBox = styled.ul`
width: 700px;
  display: flex;
  flex-direction: column;

  margin: 0;
  padding: 0;
    //  justify-content: space-between;
`

export const ContactItem = styled.li`
// width: 500px;
  // font-size: 24px;
  aligh-items: baseline;
  margin-bottom: 10px;
  margin-top: 10px;
//   margin-left: 20px;
  display: flex;
  flex-wrap: no-wrap;
  flex-direction: row;

  align-content: space-between;

`;
export const ContactItemTitle = styled.p`
  font-size: 20px;
  margin: 0;
//   margin-bottom: 10px;
  margin-left: 10px;
`;

export const ContactItemNumber = styled.span`
  margin-left: 10px;
`;
export const ContactListButton = styled.button`
// width: 60px;

height: 28px;
padding: 4px 12px;
border: 1px;
border-radius: 5px;
box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),
1px 4px 6px rgb(0 0 0 / 16%);
// margin-top: 20px;
margin-left: 24px;

background-color: #d9e1d475;

font-size: 18px;
cursor: pointer;

:hover{
    background-color: #c3c8c0;
    transform: scale(1.1);
}
`;
