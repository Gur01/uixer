import { Container } from '@/ui';
import { colors } from '@/constants';
import styled from 'styled-components';
import { Logo } from '@/components';
import Link from 'next/link'

const Header = ({ data }) => {
    console.log(data);
    const { phone, subPhone, menu } = data;

    return (
        <header>
            <StyledContainer isWide>
                <Logo onClick={() => router.push('/')} />


                <StyledNav>
                    <ul>
                        {menu.map((item, index) =>
                            <li key={index}>
                                <Link href={item.link}>
                                    <a>{item.text}</a>
                                </Link>
                            </li>)}

                    </ul>
                </StyledNav>

                <ContactBlock>
                    <Phone>{phone}</Phone>
                    <SubPhone>{subPhone}</SubPhone>
                </ContactBlock>
            </StyledContainer>
        </header>
    )
}

export default Header;


const StyledContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
	align-items: center;
    padding: 30px 0;
`

const ContactBlock = styled.div`
    color: ${colors.black};
`

const StyledNav = styled.nav`
    ul {
        li {
            display: inline-block;  
            margin: 0 40px; 
        }
    }
`

const Phone = styled.div`
    font-size: 0.9rem;
    margin-bottom: 10px;
    font-weight: 700;
`

const SubPhone = styled.div`
    font-size: 0.6rem;
`