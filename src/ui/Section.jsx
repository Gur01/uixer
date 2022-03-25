import styled from 'styled-components';

const Section = ({ children, ...props }) => {
    return (
        <StyledSection {...props}>
            {children}
        </StyledSection>
    )
}

export default Section;

const StyledSection = styled.section`
    margin-top: 90px;
    
    /* @media screen and (min-width: 1024px) {
        margin-top: 120px;
    } */
`;

