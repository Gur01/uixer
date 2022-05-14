import { colors } from '@/constants';
import { Container, Section, Title, Divider } from '@/ui';
import styled from 'styled-components';

const Companies = ({ data }) => {
    const { title, subTitle } = data;
    return (
        <Section>
            <Container>
                <TitleBlock blocks={2}>
                    <Title>{title}</Title>
                    <SubTitle>{subTitle}</SubTitle>
                </TitleBlock>
            </Container>
            <Container isWide>
                <Row>
                    <Cell><img src="./images/rgd.svg" alt="" /></Cell>
                    <Cell><img src="./images/betwinner.svg" alt="" /></Cell>
                    <Cell><img src="./images/armada.svg" alt="" /></Cell>
                </Row>
                <Row>
                    <Cell><img src="./images/cgc.svg" alt="" /></Cell>
                    <Cell><img src="./images/cska.svg" alt="" /></Cell>
                    <Cell><img src="./images/standard.svg" alt="" /></Cell>
                    <Cell><img src="./images/cat.svg" alt="" /></Cell>
                </Row>
            </Container>
            {/* <AdvantagesBox>
                    {advantages.map((item, index) =>
                        <Advantage key={index}>
                            <IconSpan>
                                <Check />
                            </IconSpan>

                            <TextSpan>{item}</TextSpan>
                        </Advantage>
                    )}
                </AdvantagesBox> */}
        </Section>
    )
}

export default Companies;

const Row = styled.div`
    display: flex;
    flex-direction: column;

    div {
        margin-bottom: 10px;
    }
    
    &:first-child {
        margin-bottom: 0;
        margin-top: 64px;
    }
    
    @media screen and (min-width: 1024px) {
        flex-direction: row;

        &:first-child {
            margin-bottom: 16px;
            margin-top: 64px;
        }
    }
`
const Cell = styled.div`
    flex-grow: 1;
    height: 164px;
    display: flex;
	justify-content: center;
	align-items: center;
    background-color: ${colors.white};
    box-shadow: 0px 60px 116px rgba(26, 24, 23, 0.05), 0px 25.0666px 48.462px rgba(26, 24, 23, 0.0359427), 0px 13.4018px 25.9101px rgba(26, 24, 23, 0.0298054), 0px 7.51293px 14.525px rgba(26, 24, 23, 0.025), 0px 3.99006px 7.71412px rgba(26, 24, 23, 0.0201946), 0px 1.66035px 3.21002px rgba(26, 24, 23, 0.0140573);

    & + div {
        margin-left: 0;
    }
    
    @media screen and (min-width: 1024px) {
        & + div {
            margin-left: 16px;
        }
    }
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

const TitleBlock = styled.div`
    width: 70%;

    @media screen and (min-width: 540px) {
        width: 80%;
    }
    @media screen and (min-width: 768px) {
        width: 60%;
    }
    @media screen and (min-width: 1024px) {
        width: 50%;
    }
`





