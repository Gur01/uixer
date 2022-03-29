import { colors } from '@/constants';
import { Container, Section, Title, Divider, Button, Telegram, VK } from '@/ui';
import styled from 'styled-components';

const Orders = ({ data }) => {
    return (
        <StyledSection>
            <Container>
                <Divider blocks={2}>
                    <OrderLeft>
                        <StyledTitle>Закажи профессиональный дизайн для своего бренда</StyledTitle>
                        <PBlock>
                            <SmallTitle>Я не за быстро и без правок.</SmallTitle>
                            <p>Для меня важно чтобы проекты были удобны,
                                интуитивно понятный пользователям и приносили прибыль, а не головную боль.</p>
                        </PBlock>
                        <PBlock>
                            <SmallTitle>Погружаюсь в самые недра процессов.</SmallTitle>
                            <p>Простым языком и на пальцах, объясняю сложное и непонятное.</p>
                        </PBlock>
                        <PBlock>
                            <SmallTitle>Обсудить проект</SmallTitle>
                            <Button><ButtonText>Связаться в telegram</ButtonText><Telegram /></Button>
                        </PBlock>
                    </OrderLeft>
                    <OrderRight>
                        <img src="./images/vlad.png" alt="" />
                        <NameBlock>
                            <div>
                                <StyledSmallTitle>Владислав Щуревич<Logo href="http://vk.com/"><VK /></Logo></StyledSmallTitle>
                                <Position>Арт-Директор компании UiUxer</Position>
                            </div>
                        </NameBlock>
                    </OrderRight>


                </Divider>
            </Container>
        </StyledSection>
    )
}

export default Orders;

const SmallTitle = styled.div`
    line-height: 48px;
    font-size: 1rem;
    line-height: 26px;
    margin-bottom: 16px;
    color: ${colors.lightBlack};
`

const StyledSmallTitle = styled.div`
    display: flex;
    justify-content: center;
	align-items: center;
`

const Logo = styled.a`
    background: ${colors.white};
    border-radius: 50%;
    box-shadow: 0px 73px 134px rgba(70, 45, 45, 0.08), 0px 33.7501px 61.9523px rgba(70, 45, 45, 0.059334), 0px 19.311px 35.4477px rgba(70, 45, 45, 0.0501425), 0px 11.7217px 21.5165px rgba(70, 45, 45, 0.0431959), 0px 7.06282px 12.9646px rgba(70, 45, 45, 0.0368041), 0px 3.93303px 7.21954px rgba(70, 45, 45, 0.0298575), 0px 1.69157px 3.10508px rgba(70, 45, 45, 0.020666);
    display: flex;
    height: 34px;
    width: 34px;
    justify-content: center;
	align-items: center;
    margin-left: 12px;
`

const NameBlock = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
	justify-content: center;

    ${SmallTitle} {
        margin-bottom: 10px;
    }
`

const Position = styled.div`
    font-size: 0.7rem;
`


const SubTitle = styled.div`
    line-height: 21px;
    color: ${colors.fullBlack};
    opacity: 0.6;
    margin-top: 30px;
    font-size: 0.7rem;

        /* @media screen and (min-width: 1024px) {
        margin-bottom: 0;
    } */
`

const StyledSection = styled(Section)`
    margin: 110px 0;
`

const OrderLeft = styled.div`
    margin-top: 50px;
    flex-grow: 1;
`

const OrderRight = styled.div`
    position: relative;   
    flex-grow: 1; 
    overflow: hidden;

    img {
        width: 100%;
        object-fit: cover;
        position: absolute;
    }
`

const PBlock = styled.div`
    margin-top: 64px;

    p {
        color: ${colors.lightBlack};
        opacity: 0.6;
    }
`

const StyledTitle = styled(Title)`
    line-height: 48px;
    margin-bottom: -2px;
`

const ButtonText = styled.span`
    margin-right: 16px;
`





