import { colors } from '@/constants';
import { Container, Section, Title, Divider, Button, Telegram, VK, SmallTitle } from '@/ui';
import styled from 'styled-components';

const About = ({ data }) => {
    const { title, vkLink, telegramTitle, telegramLink, items, telegramText, image } = data;

    return (
        <StyledSection>
            <Container>
                <Divider blocks={2}>
                    <OrderLeft>
                        <StyledTitle>{title}</StyledTitle>
                        {items.map((item, index) =>
                            <PBlock key={index}>
                                <SmallTitle>{item.title}</SmallTitle>
                                <p>{item.text}</p>
                            </PBlock>
                        )}

                        <PBlock>
                            <SmallTitle>{telegramTitle}</SmallTitle>
                            <Button as="a">{telegramText}<StyledTelegram /></Button>
                        </PBlock>
                    </OrderLeft>
                    <OrderRight>
                        <img src={image} alt="" />
                        <NameBlock>
                            <div>
                                <StyledSmallTitle>Владислав Щуревич<Logo href={vkLink}><VK /></Logo></StyledSmallTitle>
                                <Position>Арт-Директор компании UiUxer</Position>
                            </div>
                        </NameBlock>
                    </OrderRight>


                </Divider>
            </Container>
        </StyledSection>
    )
}

export default About;

const StyledTelegram = styled(Telegram)`
    margin-left: 16px;
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
    display: flex;
    flex-direction: column;

    p {
        color: ${colors.lightBlack};
        opacity: 0.6;
    }
`

const StyledTitle = styled(Title)`
    line-height: 48px;
    margin-bottom: -2px;
`







