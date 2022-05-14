import { About, Footer, Header, CallToAction, Slider, Companies, Calculator, Contacts } from '@/blocks';
import { ContactForm, ContactFormSuccess } from '@/components';
import { useModal } from '@/context';
import { main, services, header, callToAction, slider, calculator } from '@/data';
import { Modal } from '@/ui';
import {useState} from 'react'
import {MobileMenu} from '@/components'
import { useEffect } from 'react';

export const getStaticProps = async () => {
    return {
        props: { ...main }
    }
}

export default function Home({
    header,
    callToAction,
    slider,
    companies,
    calculator,
    about
}) {
    const [isOpenedMenu, setIsOpenedMenu] = useState(false);

    const closeMenu = () => {
        console.log('hello');
    }

    return (
        <>
            {
                isOpenedMenu ? <MobileMenu data={header} setIsOpenedMenu={setIsOpenedMenu}/> :
                    <>
                        <Header data={header} setIsOpenedMenu={setIsOpenedMenu}/>
                        <CallToAction data={callToAction} />
                        <Slider data={slider} />
                        <Companies data={companies} />
                        <Calculator data={calculator} />
                        <About data={about} />
                        <Contacts />
                        <Footer data={header} /></>
            }
        </>
    )
}
