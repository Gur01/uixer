import styled from 'styled-components';
import { colors } from '@/constants';

const Title = styled.h3`
    font-weight: 600;
    font-size: 32px;
    color: ${colors.lightBlack}
    line-height: 120%;
    
    /* @media screen and (min-width: 540px) {
        font-size: 40px;
    } */
`;

export default Title;

