import styled from 'styled-components';

const Logo = (props) => {
    return (
        <StyledLogo {...props}>
            <img src="./logo.png" alt="Logo" />
        </StyledLogo>
    )
}

export default Logo;

const StyledLogo = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`

