import { About, Advantages, Feedback, Footer, Header, CallToAction, Services, BannerSection } from '@/blocks';
import { ContactForm, ContactFormSuccess } from '@/components';
import { useModal } from '@/context';
import { main, services, header, callToAction } from '@/data';
import { Modal } from '@/ui';

export const getStaticProps = async () => {
    return {
        props: { header, callToAction }
    }
}

export default function Home({
    header,
    // advantages,
    // services,
    // feedback,
    // about, 
    // banner
}) {
    // const { isOpenedModal, wasSendForm } = useModal();
    console.log(header);
    return (
        <>
            <Header data={header} />
            <CallToAction data={callToAction}/>
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
