import styled from 'styled-components';
import { ErrorMessage } from './Input';

const Textarea = ({ error, errorMessage = 'Ошибка!', ...rest }) => {
    return (
        <Box>
            <StyledTextarea {...rest} />
            {error && <ErrorMessage>{errorMessage}</ErrorMessage>}

        </Box>
    )
}

export default Textarea;

const Box = styled.div`
`

const StyledTextarea = styled.textarea`
    width: 100%;
    padding: 10px;
    border: 0;
    border-bottom: 1px solid ${({ error }) => error ? '#FF0000' : '#E9E9E9'}; 
    color: ${({ error }) => error ? '#FF0000' : '#0F0F10'};
    opacity: 0.9;
    font-size: 0.7rem;
    min-height: 100px;
    resize: none;

    &:focus {
        outline-width: 0;
        opacity: 1
    }
;

`