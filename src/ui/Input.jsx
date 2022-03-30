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
`

const StyledInput = styled.input`
    width: 100%;
    padding: 10px;
    border: 0;
    border-bottom: 1px solid ${({ error }) => error ? '#FF0000' : '#E9E9E9'}; 
    opacity: 1;
    font-size: 0.7rem;
    color: ${({ error }) => error ? '#FF0000' : colors.lightBlack};
    ${({outline})=> outline && outlinedStyles}

    ::placeholder {
        color: ${colors.lightBlack};
        font-size: 0.7rem;
        opacity: 0.6;
    }
    
    &:focus {
        outline-width: 0;
        opacity: 1;
        border-bottom: 1px solid ${({ error }) => error ? '#FF0000' : '#c9c9c9'}; 
    }
`

export const ErrorMessage = styled.div`
    font-size: 12px;
    color: #FF0000;
    margin-top: 3px;
    position: absolute;
    right: 0;
`