import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const HeaderStyled = styled.header`
    height: 7rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 2.5rem;
    position: relative;
`

export const LogoWrapperStyled = styled(Link)`
    height: 100%;
    width: 7rem;
`

export const OptionsStyled = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export const OptionLinkStyled = styled(Link)`
    padding: 10px 15px;
    text-transform: uppercase;
    cursor: pointer;
`
