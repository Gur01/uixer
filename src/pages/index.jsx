import { About, Advantages, Feedback, Footer, Header, CallToAction, Slider, Companies, Calculator, BannerSection, Orders } from '@/blocks';
import { ContactForm, ContactFormSuccess } from '@/components';
import { useModal } from '@/context';
import { main, services, header, callToAction, slider, calculator } from '@/data';
import { Modal } from '@/ui';

export const getStaticProps = async () => {
    return {
        props: { header, callToAction, slider, calculator }
    }
}

export default function Home({
    header,
    callToAction,
    slider,
    calculator
    // advantages,
    // services,
    // feedback,
    // about, 
    // banner
}) {
    // const { isOpenedModal, wasSendForm } = useModal();
    return (
        <>
            <Header data={header} />
            <CallToAction data={callToAction}/>
            <Slider data={slider}/>
            <Companies />
            <Calculator data={calculator}/>
            <Orders />

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
