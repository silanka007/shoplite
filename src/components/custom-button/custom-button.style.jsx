import styled, {css} from 'styled-components';

const conditionalStyling = (props) => {
  if(props.isGoogleSignIn){
    return css`
      border: none;
      background-color: rgb(59, 59, 214);
      color: white;

      &:hover{
        background-color: white;
        color:rgb(59, 59, 214);
        border: 1px solid rgb(59, 59, 214) ;
      }
    `
  }
  return props.inverted ? css`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover{
      background-color: black;
      color: white;
      border: none;
    }
  ` :
  css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
  `
}

export const CustomButtonStyled = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;

  ${conditionalStyling}
`