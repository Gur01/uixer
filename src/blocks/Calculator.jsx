import { colors } from '@/constants';
import { Container, Section, Title, Divider, Dollar, AddButton } from '@/ui';
import { AccordionPanel} from '@/components';
import styled from 'styled-components';

const priceList = [
    {
        title: 'Одностраничный сайт',
        cost: 35000,
        items: [
            {
                title: "Брифинг",
                description: "В целом, конечно, укрепление и развитие внутренней структуры выявляет срочную потребность первоочередных требований. Консультация с широким активом требует определения и.",
                cost: 0
            },
            {
                title: "Аналитика",
                description: "",
                cost: 5000
            },
            {
                title: "Прототипирование",
                description: "",
                cost: 5000
            },
            {
                title: "Дизайн — концепция",
                description: "",
                cost: 10000
            },
            {
                title: "Адаптив",
                description: "",
                cost: 5000
            },
            {
                title: "Разработка",
                description: "",
                cost: 10000
            },
        ]
    },
    {
        title: 'Интернет-магазин',
        cost: 35000,
        items: [
            {
                title: "Брифинг",
                description: "В целом, конечно, укрепление и развитие внутренней структуры выявляет срочную потребность первоочередных требований. Консультация с широким активом требует определения и.",
                cost: 0
            },
            {
                title: "Аналитика",
                description: "",
                cost: 5000
            },
            {
                title: "Прототипирование",
                description: "",
                cost: 5000
            },
            {
                title: "Дизайн — концепция",
                description: "",
                cost: 10000
            },
            {
                title: "Адаптив",
                description: "",
                cost: 5000
            },
            {
                title: "Разработка",
                description: "",
                cost: 10000
            },
        ]
    },
    {
        title: 'Корпоративный сайт',
        cost: 35000,
        items: [
            {
                title: "Брифинг",
                description: "В целом, конечно, укрепление и развитие внутренней структуры выявляет срочную потребность первоочередных требований. Консультация с широким активом требует определения и.",
                cost: 0
            },
            {
                title: "Аналитика",
                description: "",
                cost: 5000
            },
            {
                title: "Прототипирование",
                description: "",
                cost: 5000
            },
            {
                title: "Дизайн — концепция",
                description: "",
                cost: 10000
            },
            {
                title: "Адаптив",
                description: "",
                cost: 5000
            },
            {
                title: "Разработка",
                description: "",
                cost: 10000
            },
        ]
    },
]

const Calculator = ({ data }) => {
    return (
        <Section>
            <Container>
                <StyledDivider blocks={2}>
                    <Title>Рассчитать стоимость:</Title>
                    <DollarBox>
                        <Dollar />
                    </DollarBox>
                </StyledDivider>
            </Container>
            <Container isWide>
                <Accordion>
                    {priceList.map((item, index) =>
                        <AccordionPanel key={index} data={item}/>
                    )}
                </Accordion>

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

export default Calculator;

const StyledDivider = styled(Divider)`
    align-items: center;
`

const Accordion = styled.ol`
    counter-reset: item;
    margin-left: 0;
    padding-left: 0;
    list-style-type: none;
    margin-top: 60px;
`

const DollarBox = styled(Divider)`
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: auto;
        /* align-content: flex-end; */

        /* @media screen and (min-width: 1024px) {
        margin-bottom: 0;
    } */
`




