import styled from 'styled-components'
import { deviceQuery } from "./mediaSizes";

export const StylesDiv = styled.div`
display: flex;
align-items: center ;
flex-direction: column;
height: 100%;

`;

export const MainDiv = styled.div`

> :last-child {
  display: none;
}

${deviceQuery.tabletM} {
  > :first-child {
    display: none;
  }
  > :last-child {
    display: block;
  }
}

`;
export const PaddingButton = styled.button`
height: 35px;
width: 35px;
border: none;
font-size: 20px;
`;

export const Filter = styled.span`
padding-top:20px;
padding:20px;
display: flex;
flex-direction: row;

`;


