import { AddButton } from '@/ui';
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

const AccordionPanel = ({data}) => {
    console.log(data);
    const [total, setTotal] = useState(0);
    const [isOpened, setIsOpened] = useState(true);

    const count = (sum) => {
        setTotal((state) => state + sum)
    }

    const openPanel = () => {
        setIsOpened(true);

    }

    return (
        <StyledAccordionPanel>
            <ServiceTitle>{data.title}</ServiceTitle>
            <AddButton onClick={openPanel} />
            
        </StyledAccordionPanel>
    )
}

export default AccordionPanel

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
        width: 2em;
        margin-left: 2em;
    }
`

const ServiceTitle = styled.div`
        flex-grow: 1;
        line-height: 22px;
        font-size: 0.9rem;
`
