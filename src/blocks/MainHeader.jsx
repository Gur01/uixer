import { Logo } from '@/components';
import { colors } from '@/constants';
import { Container } from '@/ui';
import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';

const Header = ({ data, setIsOpenedMenu }) => {
    const { phone, subPhone, menu } = data;

    const openMenu = () => {
        setIsOpenedMenu(true);
    }

    return (
        <StyledHeader>
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

                <HambergerMenu onClick={openMenu} isOpened={false}></HambergerMenu>
            </StyledContainer>
        </StyledHeader>
    )
}

export default Header;

const StyledHeader = styled.header`
    position: relative;
    background-color: transparent;

    &:before {
        content: " ";
        position: absolute;
        right: 0;
        background-image: url(../images/ellipse.png);
        width: 700px;
        height: 700px;
    }
`

export const StyledContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
	align-items: center;
    padding-top: 30px;
    padding-bottom: 30px;
`

const StyledNav = styled.nav`
    display: none;

    ul {
        li {
            display: inline-block;  
            margin: 0 40px; 
            opacity: 0.6;

            &:hover {
                opacity: 1;
            }
        }
    }

    @media screen and (min-width: 1024px) {
        display: inline-block;
    }
`

const ContactBlock = styled.div`
    display: none;
    color: ${colors.black};
    
    @media screen and (min-width: 1024px) {
        display: inline-block;
    }
`


const Phone = styled.div`
    font-size: 0.9rem;
    margin-bottom: 10px;
    font-weight: 600;
`

const SubPhone = styled.div`
    font-size: 0.6rem;
`

export const HambergerMenu = styled.div`
    width: 27px;
    height: 12px;
    position: relative;
    cursor: pointer;
    display: inline-block;
    user-select: none;

    &:before,
    &:after {
        position: absolute;
        width: 100%;
        height: 2px;
        content: '';
        background-color: ${colors.black}
    }

    &:before {
        top: ${({isOpened})=> isOpened ? '5px' : '0'};
        transform:  ${({isOpened})=> isOpened ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:after {
        bottom: ${({isOpened})=> isOpened ? '5px' : '0'};
        transform:  ${({isOpened})=> isOpened ? 'rotate(-45deg)' : 'rotate(0)'};
    }

    @media screen and (min-width: 1024px) {
        display: none;
    }
`