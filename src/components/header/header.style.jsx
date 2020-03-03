import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const HeaderStyled = styled.header`
    height: 7rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 2.5rem;
    position: relative;

    @media screen and (max-width: 800px){
        height: 5rem;
        padding: 1.5rem;

    }
`

export const LogoWrapperStyled = styled(Link)`
    height: 100%;
    width: 7rem;

    @media screen and (max-width: 800px){
        width: 20%;
        padding: unset;
    }
`

export const OptionsStyled = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media screen and (max-width: 800px){
        width: 80%;
        padding: 2rem 0;
    }
`

export const OptionLinkStyled = styled(Link)`
    padding: 10px 15px;
    text-transform: uppercase;
    cursor: pointer;
`
