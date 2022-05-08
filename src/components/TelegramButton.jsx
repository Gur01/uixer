import { Button, Telegram } from '@/ui';
import styled from 'styled-components';

const TelegramButton = ({ className }) => <StyledButton  forwardedAs="a" className={className}>Связаться в telegram<StyledTelegram /></StyledButton>

export default TelegramButton;

const StyledTelegram = styled(Telegram)`
    margin-left: 16px;
`

const StyledButton = styled(Button)`
    width: 100%;
    
    @media screen and (min-width: 768px) {
        width: auto;
    }
`
