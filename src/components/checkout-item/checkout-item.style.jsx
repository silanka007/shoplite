import styled from 'styled-components';

export const CheckoutItemStyled = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`

export const  CheckoutImageContainerStyled = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`
export const CheckoutSpanElemStyled = styled.span`
  width: 23%;
`
export const CheckoutQuantityStyled = styled.span`
  display: flex;
  width: 23%;

  .arrow{
    cursor: pointer;
  }

  .value{
    margin: 0 1rem;
  }
`

export const CheckoutRemoveItemStyled = styled.div`
  padding-left: 12px;
  cursor: pointer;
`
  