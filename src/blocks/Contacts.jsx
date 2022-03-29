import { AccordionPanel } from '@/components';
import { colors } from '@/constants';
import { Accordion, Container, Divider, Dollar, Section, SmallTitle, Input, Select, Textarea, Button } from '@/ui';
import styled from 'styled-components';

const items = ['Разработка', 'Консультация', 'Поговорить хочу'];

const Contacts = ({ data }) => {
    // const {title, price} = data;

    const onSelect = (value) => {
        console.log(value)
    }

    return (
        <StyledSection>
            <Container>
                <Divider blocks={2}>
                    <ContactInfo>
                        <StyledSmallTitle>Контакты</StyledSmallTitle>
                        <Divider blocks={2}>
                            <div>
                                <EmailBlock>
                                    <Label>Написать на почту</Label>
                                    <Link>hi@uiuxer.design</Link>
                                </EmailBlock>
                                    <Label>Behance</Label>
                                    <Link>hi@uiuxer.design</Link>
                                    <Link>Dribbble</Link>
                            </div>
                            <div>
                                <Label>Связаться в телеграм</Label>
                                <Link>@schurevich</Link>
                            </div>
                        </Divider>
                    </ContactInfo>
                    <ContactForm>
                        <StyledSmallTitle>Есть что обсудить? оставь заявку <br />и мы с Вами свяжемся!</StyledSmallTitle>
                        <StyledForm>
                            <Input type="text" placeholder="Как вас зовут?"/>
                            <StyledDivider blocks={2}>
                                <Input type="text" placeholder="Как вас зовут?"/>
                                <Input type="text" placeholder="Как вас зовут?"/>
                            </StyledDivider>
                            <StyledSelect placeholder={'Что интересует?'} items={items} onChange={onSelect}/>
                            <StyledTextarea placeholder="Сообщение"/>
                            <StyledButton type="submit">Оставить заявку</StyledButton>
                        </StyledForm>

                    </ContactForm>
                </Divider>
            </Container>
        </StyledSection>
    )
}

export default Contacts;


const StyledDivider = styled(Divider)`
    margin-top: 45px;

    > div:first-child {
        margin-right: 25px;
    }
    > div:last-child {
        margin-left: 25px;
    }
`

const StyledButton = styled(Button)`
    margin-top: 40px;
`

const StyledTextarea = styled(Textarea)`
    margin-top: 45px;
`

const StyledSelect = styled(Select)`
    margin-top: 45px;
`

const StyledForm = styled.form`
    
`

const StyledSection = styled(Section)`
    padding-top: 150px;
    background-color: ${colors.white};
`

const StyledSmallTitle = styled(SmallTitle)`
    height: 150px;
`

const ContactInfo = styled.div`
    align-items: center;
`
const ContactForm = styled.div`
    align-items: center;
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
const Label = styled.div`
    font-size: 0.7rem;
    color: ${colors.lightBlack};
    opacity: 0.6;
    margin-top: 12px;
`

const Link = styled.a`
    font-size: 0.9rem;
    color: ${colors.black};
    text-decoration: underline;
    cursor: pointer;
    display: block;
    margin-top: 15px;
`;

const EmailBlock = styled.div`
    margin-bottom: 50px;
`





