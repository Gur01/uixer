import { colors } from "@/constants";
import AddButton from '@/ui/AddButton';
import { formatPrice } from "@/utils";
import { useState } from 'react';
import styled from "styled-components";

const AccordionItem = ({ onOpen, onClose, title, cost, description }) => {
    const [isOpened, setIsOpened] = useState(false);

    const handleOpened = () => {
        setIsOpened(!isOpened);
    }

    const onOpenDecorator = () => {
        handleOpened();
        onOpen();
    }

    const onCloseDecorator = () => {
        handleOpened()
        onClose();
    }
    
    return (
        <StyledAccordionItem>
            <ServiceTitle>{title}</ServiceTitle>
            <Cost isOpened={isOpened}>{formatPrice(cost)}</Cost>
            <AddButton onOpen={onOpenDecorator} onClose={onCloseDecorator} disabled={cost === 0} isOpened={cost === 0 ? true : isOpened}/>
        </StyledAccordionItem>
    );
}

export default AccordionItem;

const Cost = styled.div`
    font-weight: 600;
    font-size: 0.9rem;
    color: ${colors.lightBlack};
    ${({isOpened})=> !isOpened && 'opacity: 0.6'}
`

const StyledAccordionItem = styled.li`
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
