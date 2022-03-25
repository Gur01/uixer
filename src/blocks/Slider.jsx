import { colors } from '@/constants';
import { Check, Container, Section } from '@/ui';
import styled from 'styled-components';

const Slider = ({ data }) => {
    const { advantages } = data;

    return (
        <Section>
            <Container>
                <AdvantagesBox>
                    {advantages.map((item, index) =>
                        <Advantage key={index}>
                            <IconSpan>
                                <Check />
                            </IconSpan>

                            <TextSpan>{item}</TextSpan>
                        </Advantage>
                    )}
                </AdvantagesBox>
            </Container>
        </Section>
    )
}

export default Slider;

const Advantage = styled.div`
    display: flex;
    justify-content: center;
	align-items: center;
`
const AdvantagesBox = styled.div`
    display: flex;
	justify-content: space-between;
	align-items: center;
    margin-top: 46px;
`

const StyledImg = styled.img`
    margin-left: 25px;
    `

const IconSpan = styled.span`
    margin-right: 20px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
	justify-content: center;
	align-items: center;
    background-color: ${colors.white}
`

const TextSpan = styled.span`
    font-weight: 700;
    font-size: 0.7rem;
`

const StyledTitle = styled.h1`
    font-size: 4.7rem;
    line-height: 103.4px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    /* @media screen and (min-width: 1024px) {
        margin-bottom: 0;
    } */
    
`






