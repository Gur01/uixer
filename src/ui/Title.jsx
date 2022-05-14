import styled from 'styled-components';
import { colors } from '@/constants';

const Title = styled.h3`
    font-weight: 600;
    font-size: 1.3rem;
    color: ${colors.lightBlack};
    line-height: 120%;
    
    @media screen and (min-width: 1024px) {
        font-size: 1.6rem;
    }
`;

export default Title;

