import { About, Advantages, Feedback, Footer, Header, CallToAction, Slider, Companies, Calculator, BannerSection, Contacts } from '@/blocks';
import { ContactForm, ContactFormSuccess } from '@/components';
import { useModal } from '@/context';
import { main, services, header, callToAction, slider, calculator } from '@/data';
import { Modal } from '@/ui';

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
    return (
        <>
            <Header data={header} />
            <CallToAction data={callToAction}/>
            <Slider data={slider}/>
            <Companies data={companies} />
            <Calculator data={calculator}/>
            <About data={about} />
            <Contacts />

            {/* <Advantages data={advantages} />
            <BannerSection data={banner} />
=           <Services data={services} />
            <Feedback data={feedback} />
            <About data={about} />
            <Footer />
            <Modal open={isOpenedModal}>
                {!wasSendForm && <ContactForm />}
                {wasSendForm && <ContactFormSuccess />}
            </Modal> */}
        </>
    )
}
