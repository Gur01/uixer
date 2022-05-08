import {
    HambergerMenu, StyledContainer
} from '@/blocks/MainHeader';
import { Logo, TelegramButton } from '@/components';
import { colors } from '@/constants';
import { Button, Telegram } from '@/ui';
import Link from 'next/link';
import styled from 'styled-components';

const MobileMenu = ({ data, setIsOpenedMenu }) => {
    const { menu } = data;

    return (
        <MenuBlock>
            <div>
                <StyledContainer isWide>
                    <Logo onClick={() => router.push('/')} />

                    <HambergerMenu onClick={() => setIsOpenedMenu(false)} isOpened={true}></HambergerMenu>
                </StyledContainer>
                <StyledContainer isWide>
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
                </StyledContainer>
            </div>

            <StyledContainer isWide>
                <TelegramButton />
            </StyledContainer>

        </MenuBlock>
    )
}

export default MobileMenu;

const StyledNav = styled.nav`

    ul {
        li {
            margin-bottom: 46px; 
            color: ${colors.lightBlack};
            
            a {
                font-size: 1rem;
            }
        }
    }

`

const MenuBlock = styled.div`
    display: flex;
	flex-direction: column;
	justify-content: space-between;
    height: 100vh;
`
