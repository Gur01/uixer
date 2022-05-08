import { colors } from '@/constants';
import { TelegramButton } from '@/components';
import { Check, Container, Section } from '@/ui';
import styled from 'styled-components';

const CallToAction = ({ data }) => {
    const { advantages } = data;

    return (
        <Section>
            <Container>
                <StyledTitle>Наш дизайн умеет <StyledImg src="./images/sticker-like.png" alt="" /> зарабатывать деньги</StyledTitle>
                <AdvantagesBox>
                    {advantages.map((item, index) =>
                        <Advantage key={index}>
                            <IconSpan>
                                <Check />
                            </IconSpan>

                            <TextSpan>{item}</TextSpan>
                        </Advantage>
                    )}
                </AdvantagesBox>

                <StyledTelegramButton />
            </Container>
        </Section>
    )
}

export default CallToAction;

const Advantage = styled.div`
    display: flex;
    justify-content: center;
	align-items: center;

    &:not(:last-child) {
        margin-bottom: 26px;    
    }
    
    @media screen and (min-width: 1024px) {
        &:not(:last-child) {
            margin-bottom: 0;    
        }
    }
`
const AdvantagesBox = styled.div`
    display: flex;
	align-items: flex-start;
    margin-top: 46px;
    flex-direction: column;
    
    @media screen and (min-width: 1024px) {
        flex-direction: row;
        line-height: 103.4px;
        font-size: 4.4rem;
        justify-content: space-between;
        align-items: center;
    }
`

const StyledImg = styled.img`
    margin-left: 25px;
    `

const IconSpan = styled.span`
    margin-right: 20px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
	justify-content: center;
	align-items: center;
    background-color: ${colors.white};
`

const TextSpan = styled.span`
    font-weight: 700;
    font-size: 0.7rem;
`

const StyledTitle = styled.h1`
    line-height: 52px;
    font-weight: 400;
    opacity: 0.9;
    font-size: 2rem;
    
    @media screen and (min-width: 768px) {
        font-size: 3rem;
        line-height: 80px;
    }
    
    @media screen and (min-width: 1024px) {
        line-height: 103.4px;
        font-size: 4.4rem;
    }

    img {
        vertical-align: middle;
        width: 50px;
        
        @media screen and (min-width: 768px) {
            font-size: 3rem;
            line-height: 80px;
            width: 80px;
        }

        @media screen and (min-width: 1024px) {
            width: auto;
        }

    }
    
`

const StyledTelegramButton = styled(TelegramButton)`
        margin-top: 56px;
        
        @media screen and (min-width: 1024px) {
            display: none;
        }
`






