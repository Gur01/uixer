import { AddButton, Accordion, Title, AccordionItem, Button, Telegram, Input } from '@/ui';
import { colors } from '@/constants';
import { formatPrice } from '@/utils';
import styled from 'styled-components';
import { useState } from 'react';

const data = {
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
}

const AccordionPanel = ({ data }) => {
    const { items, title, cost } = data;
    console.log(data);
    const [total, setTotal] = useState(0);
    const [isOpened, setIsOpened] = useState(false);
    console.log(isOpened);

    const openPanel = () => {
        setIsOpened(true);
        setTotal((state) => state + cost);
    }

    const closePanel = () => {
        setIsOpened(false);
        setTotal(0);
    }

    return (
        <>
            <AccordionItem
                title={title}
                cost={cost}
                onOpen={openPanel}
                onClose={closePanel}
            />
            {isOpened && <StyledAccordion>
                {items.map((item, index) => {
                    const { title, cost, description } = item;

                    return (
                        <AccordionItem
                            key={index}
                            title={title}
                            cost={cost}
                            description={description}
                            onOpen={() => setTotal((state) => state + cost)}
                            onClose={() => setTotal((state) => state - cost)}
                        />
                    )
                })}
                <Result>
                    <ResultLeft>
                        <TextBlock>
                            <Title>Итого</Title>
                            <ResultSubTitle>В целом, конечно, укрепление и развитие внутренней структуры выявляет срочную потребность</ResultSubTitle>
                        </TextBlock>
                        <FormBlock>
                            <StyledInput type="text" placeholder="Номер телефона" outline />
                            <Button><ButtonText>Заказать сайт</ButtonText><Telegram /></Button>
                        </FormBlock>
                    </ResultLeft>
                    <ResultSum>{formatPrice(total)}</ResultSum>
                </Result>
            </StyledAccordion>}
        </>
    )
}

export default AccordionPanel

const TextBlock = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
`

const ButtonText = styled.span`
    margin-right: 16px;
`

const ResultLeft = styled.div`
    margin-right: 16px;
    width: 50%;
`

const FormBlock = styled.form`
    display: flex;
    /* justify-content: space-between; */
`

const StyledInput = styled(Input)`
    min-width: 250px;
    margin-right: 20px;
`

const Result = styled.div`
    padding: 40px 0 65px;
    display: flex;
	justify-content: space-between;
    border-top: 1px solid rgba(47, 47, 47, 0.4); //colors.lightBlack

`

const ResultSubTitle = styled.div`
    font-weight: 600;
    font-size: 0.7rem;
    opacity: 0.6;
    margin-top: 16px;
    margin-bottom: 38px;
`

const ResultSum = styled.div`
    margin-right: 150px;
`

const StyledAccordion = styled(Accordion)`
    margin-left: 100px;
    margin-top: 0;
`


