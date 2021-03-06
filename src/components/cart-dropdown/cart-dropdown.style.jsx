import styled from 'styled-components';

export const CartDropDownStyled = styled.div`
  position: absolute;
  width: 27rem;
  height: 40rem;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 9.5rem;
  right: 2rem;
  z-index: 10;

  button {
    margin-top: auto;
    outline: none;
    
    &:active{
      outline: 2px solid black;
      outline-offset: .1rem;
      position: relative;
      top: .2rem;
    }
  }
`

export const CartItemsStyled = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;

  .empty-cart{
    margin: 5rem auto;
    font-size: 2rem;
  }
`


