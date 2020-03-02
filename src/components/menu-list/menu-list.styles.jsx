import styled, {css} from 'styled-components';

export const MenuItemsStyled = styled.div`
    min-width: 30%;
    height: ${({size}) => (size ? '38rem' : '24rem')};
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    // border: 1px solid black;
    margin: 0 7.5px 15px;
    overflow: hidden;

    &:hover{
        cursor: pointer;

        .onHover-image{
            transform: scale(1.1);
            transition: transform 6s cubic-bezier(.25, .45, .45, .95);
        }
        .onHover-content{
            opacity: 0.9;
        }
    }

    &:first-child{
        margin-right: 7.5px;
    }

    &:last-child{
        margin-left: 7.5px;
    }
`

export const BackgroundImageStyled = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${({imageUrl}) => imageUrl});
    background-position: center;
    background-size: cover;
`

export const ContentStyled = styled.div`
    height: 9rem;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    // border: 1px solid black;
    background-color: white;
    opacity: 0.7;
    position: absolute;
`

export const ContentTitleStyled = styled.h1`
    font-weight: bold;
    margin-bottom: 6px;
    font-size: 22px;
    color: #4a4a4a;
`

export const ContentSubTitleStyled = styled.span`
    font-weight: lighter;
    font-size: 16px;
`
