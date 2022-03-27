import { colors } from '@/constants';
import { Plus } from '@/ui/Icons';
import styled, { css } from 'styled-components';

// export const Plus = (props) => <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
//     <path d="M4.25 9L14.75 9" stroke="#2F2F2F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//     <path d="M9.5 14.2502L9.5 3.75024" stroke="#2F2F2F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
// </svg>

const AddButton = ({ isOpened, onOpen, onClose }) => {
    console.log(isOpened)
    return (
        <Box>
            {isOpened ? <ButtonClose onClick={onClose}><StyledPlus isOpened={isOpened}/></ButtonClose> : <ButtonOpen onClick={onOpen}><Plus isOpened={isOpened}/></ButtonOpen>}
        </Box>
    )
}

export default AddButton;

const Box = styled.div`
    min-width: 150px;    
    display: flex;
	justify-content: flex-end;
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
    height: 34px;
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
    border: none;
    ${commonProps}
`

const StyledPlus = styled(Plus)`
    fill: ${colors.lightBlack};
    transform: rotate(45deg);
`





