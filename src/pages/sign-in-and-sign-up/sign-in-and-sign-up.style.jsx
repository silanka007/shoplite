import styled from 'styled-components';

export const SignInSignOutStyled = styled.div`
    width: 90rem;
    display:flex;
    justify-content: space-between;
    margin: 0 auto;

    @media screen and (max-width: 800px){
        flex-direction: column;
        width: 100%;
        justify-content: center;
        align-items: center;
    }
`