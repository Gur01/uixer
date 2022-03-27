import { AddButton, Accordion, Title } from '@/ui';
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

    const openPanel = (sum) => {
        setIsOpened(true);
        setTotal((state) => state + sum)
    }

    const closePanel = () => {
        setIsOpened(false);
        setTotal(0)
    }

    return (
        <>
            <StyledAccordionPanel>
                <ServiceTitle>{title}</ServiceTitle>
                <Cost>{formatPrice(cost)}</Cost>
                <AddButton onOpen={()=> openPanel(cost)} onClose={()=>closePanel(cost)} isOpened={isOpened} />
            </StyledAccordionPanel>
            {isOpened && <StyledAccordion>
                {items.map((item, index) => {
                    const { title, cost, description } = item;

                    return (
                        <StyledAccordionPanel key={index}>
                            <ServiceTitle>{title}</ServiceTitle>
                            <Cost>{formatPrice(cost)}</Cost>
                            <AddButton onOpen={()=> setTotal((state) => state + cost)} onClose={()=> setTotal((state) => state - cost)}/>

                            {/* {description && <div>description</div>} */}
                        </StyledAccordionPanel>

                    )
                })}
            </StyledAccordion>}
            <Result>
                <div>
                    <Title>Итого</Title>
                    <ResultSubTitle></ResultSubTitle>
                </div>
                <ResultSum>{formatPrice(total)}</ResultSum>
            </Result>
        </>
    )
}

export default AccordionPanel

const Result = styled.div`
    padding: 40px 0 65px;
    display: flex;
	justify-content: space-between;
    margin-left: 100px;
`

const ResultTitle = styled.div`
    font-weight: 600;

`

const ResultSubTitle = styled.div`
    
`

const ResultSum = styled.div`
    
`


const Cost = styled.div`
    font-weight: 600;
    font-size: 0.9rem;
    color: ${colors.lightBlack};
`

const StyledAccordionPanel = styled.li`
    display: flex;
    padding: 33px 0;
    border-top: 1px solid rgba(47, 47, 47, 0.4); //colors.lightBlack
    justify-content: space-between;
	align-items: center;

    &:before {
        display: inline-block;
        content: "0" counter(item) "/ ";
        counter-increment: item;
        width: 100px;
    }
    
    & + ol > li {
        &:last-child {
            border-bottom: 1px solid rgba(47, 47, 47, 0.4); //colors.lightBlack
        }

        &:before {
            width: 50px;
        }

    }
`

const ServiceTitle = styled.div`
        flex-grow: 1;
        line-height: 22px;
        font-size: 0.9rem;
        font-weight: 600;
`

const StyledAccordion = styled(Accordion)`
    margin-left: 100px;
    margin-top: 0;
`


