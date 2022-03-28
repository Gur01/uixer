import { colors } from '@/constants';
import styled from 'styled-components';

const Button = ({ children, ...props }) => {
    return (
        <StyledButton {...props}>
            {children}
        </StyledButton>
    )
}

export default Button;

const StyledButton = styled.button`
	align-items: center;    
	outline: none;
    align-self: flex-start;
    background-color: transparent;
    border: 2px solid ${colors.red};
    color: ${colors.fullBlack};
    cursor: pointer;
    display: flex;
    font-size: 0.7rem;
    height: 58px;
    justify-content: center;
    padding: 18px 46px;
    text-transform: uppercase;
    white-space: nowrap;
`;

