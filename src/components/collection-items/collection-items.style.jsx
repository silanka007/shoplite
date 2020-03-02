import styled from 'styled-components';

export const  CollectionItemStyled = styled.div`
    display: flex;
    width: 22vw;
    flex-flow: column;
    height: 35rem;
    align-items: center;
    position: relative;
    margin-bottom: 2rem;

    button{
        width: 80%;
        opacity: 0.7;
        position: absolute;
        top: 255px;
        display: none;
    }

    &:hover {
        div{
            opacity: 0.8;
        }
        button {
          opacity: 0.85;
          display: flex;
        }
      }
`

export const CollectionItemImageStyled = styled.div`
    width: 100%;
    height: 90%;
    background-size: cover;
    background-position: center; 
    margin-bottom: .5rem;
`

export const CollectionItemFooterStyled = styled.div`
    display: flex;
    justify-content: space-between;
    height: 5%;
    width: 100%;
    font-size: 1.8rem;
`

