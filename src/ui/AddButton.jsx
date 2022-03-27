import { Cross, Plus } from '@/ui';
import { colors } from '@/constants';
import styled from 'styled-components';

const AddButton = ({ isOpened }) =>
    <Button>{isOpened ? <Cross /> : <Plus />}</Button>


export default AddButton;



const Button = styled.div`
    align-items: center;
    border-radius: 50px; 
    border: 1.5px solid ${colors.lightBlack};
    cursor: pointer;   
    display: flex;
    filter: drop-shadow(0px 73px 134px rgba(70, 45, 45, 0.08)) drop-shadow(0px 33.7501px 61.9523px rgba(70, 45, 45, 0.059334)) drop-shadow(0px 19.311px 35.4477px rgba(70, 45, 45, 0.0501425)) drop-shadow(0px 11.7217px 21.5165px rgba(70, 45, 45, 0.0431959)) drop-shadow(0px 7.06282px 12.9646px rgba(70, 45, 45, 0.0368041)) drop-shadow(0px 3.93303px 7.21954px rgba(70, 45, 45, 0.0298575)) drop-shadow(0px 1.69157px 3.10508px rgba(70, 45, 45, 0.020666));
    flex-direction: row;
    height: 34px;
    justify-content: center;
    width: 67px;
`





