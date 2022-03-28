import styled, {css} from 'styled-components';
import {colors} from '@/constants';

const Input = ({ errorMessage, outline, className, ...rest }) => {
    return (
        <Box className={className}>
            <StyledInput type="text" outline={outline} {...rest} />
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </Box>
    )
}

export default Input;

const Box = styled.div`
    position: relative;
`

const outlinedStyles = css`
    border: 1px solid ${({ error }) => error ? '#FF0000' : '#F2F2F2'};
    height: 58px;
    padding-left: 20px;

    ::placeholder {
        color: ${colors.lightBlack};
        font-size: 0.7rem;
        opacity: 0.6;
    }
`

const StyledInput = styled.input`
    width: 100%;
    padding: 10px;
    border: 0;
    border-bottom: 1px solid ${({ error }) => error ? '#FF0000' : '#0F0F10'};
    opacity: 0.8;
    font-size: 16px;
    font-family: inherit;
    color: ${({ error }) => error ? '#FF0000' : '#0F0F10'};
    ${({outline})=> outline && outlinedStyles}
    
    &:focus {
        outline-width: 0;
        opacity: 1;
    }
`

export const ErrorMessage = styled.div`
    font-size: 12px;
    color: #FF0000;
    margin-top: 3px;
    position: absolute;
    right: 0;
`