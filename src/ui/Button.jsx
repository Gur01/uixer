import styled from 'styled-components';
import { colors } from '@/constants';

const Button = ({ children, ...props }) => {
    return (
        <StyledButton {...props}>
            {children}
        </StyledButton>
    )
}

export default Button;

const StyledButton = styled.button`
    /* height: 58px; */
    padding: 18px 46px;
    background-color: #FFD337;
    color: ${colors.black};
	outline: none;
    font-size: 0.7rem;
    cursor: pointer;
    white-space: nowrap;
    border: 1px solid ${colors.red}
`;

