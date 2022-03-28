import { colors } from '@/constants';
import { Plus } from '@/ui/Icons';
import styled, { css } from 'styled-components';

const AddButton = ({onOpen, onClose, isOpened, disabled }) => {
    return (
        <Box disabled={disabled}>
            {isOpened ? <ButtonClose onClick={onClose} disabled={disabled}><StyledPlus /></ButtonClose> : <ButtonOpen onClick={onOpen} disabled={disabled}><Plus /></ButtonOpen>}
        </Box>
    )
}

export default AddButton;

const Box = styled.div`
    min-width: 150px;    
    display: flex;
	justify-content: flex-end;
    ${({disabled}) => disabled && 'opacity: 0.6'}

`

const commonProps = css`
    align-items: center;
    cursor: pointer;   
    display: flex;
    justify-content: center;
    outline: none;
    flex-direction: row;
`

const ButtonOpen = styled.button`
    border-radius: 50px; 
    border: 1px solid ${colors.lightBlack};
    filter: drop-shadow(0px 73px 134px rgba(70, 45, 45, 0.08)) drop-shadow(0px 33.7501px 61.9523px rgba(70, 45, 45, 0.059334)) drop-shadow(0px 19.311px 35.4477px rgba(70, 45, 45, 0.0501425)) drop-shadow(0px 11.7217px 21.5165px rgba(70, 45, 45, 0.0431959)) drop-shadow(0px 7.06282px 12.9646px rgba(70, 45, 45, 0.0368041)) drop-shadow(0px 3.93303px 7.21954px rgba(70, 45, 45, 0.0298575)) drop-shadow(0px 1.69157px 3.10508px rgba(70, 45, 45, 0.020666));
    height: 32px;
    width: 67px;
    background-color: transparent;
    ${commonProps}
`

const ButtonClose = styled.button`
    width: 32px;
    height: 32px;
    background-color: ${colors.white};
    box-shadow: 0px 73px 134px rgba(70, 45, 45, 0.08), 0px 33.7501px 61.9523px rgba(70, 45, 45, 0.059334), 0px 19.311px 35.4477px rgba(70, 45, 45, 0.0501425), 0px 11.7217px 21.5165px rgba(70, 45, 45, 0.0431959), 0px 7.06282px 12.9646px rgba(70, 45, 45, 0.0368041), 0px 3.93303px 7.21954px rgba(70, 45, 45, 0.0298575), 0px 1.69157px 3.10508px rgba(70, 45, 45, 0.020666);
    border-radius: 50%;
    border: 1px solid transparent;
    ${commonProps}
`

const StyledPlus = styled(Plus)`
    fill: ${colors.lightBlack};
    transform: rotate(45deg);
`





