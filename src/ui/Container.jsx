import styled from 'styled-components';

const Container = ({ children, className, isWide }) => {
    return (
        <StyledContainer className={className} isWide={isWide}>{children}</StyledContainer>
    )
}

export default Container;

const StyledContainer = styled.div`
    margin: 0 auto;
    max-width: ${({isWide}) => isWide ? '1260' : '1056'}px;
    padding: 0 20px;
    position: relative;
    width: 100%;
`;