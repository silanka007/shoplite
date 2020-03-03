import styled from 'styled-components';

export const CollectionPreviewStyled = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
`

export const PreviewTitledStyled = styled.h1`
    font-size: 2.8rem;
    margin-bottom: 2.5rem;

    @media screen and (max-width: 800px){
        margin-left: .5rem;
    }
`

export const PreviewStyled = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 800px){
        width: 98%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 2%;
        margin: 0 auto;
        margin-bottom: 3rem;
    }
`
