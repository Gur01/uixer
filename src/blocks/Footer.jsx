import { colors } from '@/constants';
import { Container } from '@/ui';
import styled from 'styled-components';

const Footer = ({ data }) => {

    const { menu } = data;

    return (
        <StyledFooter>
            <StyledContainer>
                <StyledNav>
                    <ul>
                        {menu.map((item, index) => <li key={index}>
                            <Link href={item.link}>{item.text}</Link>
                        </li>)}
                    </ul>
                </StyledNav>
                <Copyright>Copyright © 2022 UiUxer</Copyright>
            </StyledContainer>
        </StyledFooter>
    )
}

export default Footer;

const StyledNav = styled.nav`
    /* display: inline-block; */

    ul {
        padding: 25px 0;
        li {
            display: inline-block;
            margin-right: 80px;
        }
    }
`

const StyledFooter = styled.footer`
    background-color: ${colors.lightGray};

    @media screen and (min-width: 1024px) {
        /* margin-top: 120px */
    }

`

const StyledContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Copyright = styled.div`
    /* display: inline-block; */
    font-size: 0.7rem;
`

const Link = styled.a`
    font-size: 0.7rem;
`