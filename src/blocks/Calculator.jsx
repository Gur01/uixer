import { AccordionPanel } from '@/components';
import { Accordion, Container, Divider, Dollar, Section, Title } from '@/ui';
import styled from 'styled-components';

const Calculator = ({ data }) => {
    const {title, price} = data;

    return (
        <Section>
            <Container>
                <StyledDivider blocks={2}>
                    <Title>{title}</Title>
                    <DollarBox>
                        <Dollar />
                    </DollarBox>
                </StyledDivider>
            </Container>
            <Container isWide>
                <Accordion>
                    {price.map((item, index) =>
                        <AccordionPanel key={index} data={item}/>
                    )}
                </Accordion>
            </Container>
        </Section>
    )
}

export default Calculator;

const StyledDivider = styled(Divider)`
    align-items: center;
`

const DollarBox = styled(Divider)`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 39px;
    /* align-content: flex-end; */
    
    @media screen and (min-width: 1024px) {
        width: 55px;
    }
`




