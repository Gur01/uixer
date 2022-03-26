import { BannerSection, Footer, PageContent, PageHeader } from '@/blocks';
import { ContactForm, ContactFormSuccess } from '@/components';
import { useModal } from '@/context';
import { about, services } from '@/data';
import { Modal } from '@/ui';

export const getStaticProps = async () => {
    return {
        props: {...about, services}
    }
}

const About = ({header, content, services, banner}) => {
    const { isOpenedModal, wasSendForm } = useModal();

    return (
        <>  
            <PageHeader data={header}/>
            <PageContent data={content}/>
            <BannerSection data={banner} />
            <Footer />
            <Modal open={isOpenedModal}>
                {!wasSendForm && <ContactForm />}
                {wasSendForm && <ContactFormSuccess />}
            </Modal>
        </>
    )
}

export default About;
