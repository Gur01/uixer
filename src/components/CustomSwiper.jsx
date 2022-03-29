import styled from 'styled-components';
import SwiperCore, { Autoplay, Scrollbar } from 'swiper';
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Swiper } from 'swiper/react';

SwiperCore.use([Scrollbar, Autoplay]);


const CustomSwiper = ({children, autoplay = false, spaceBetween = 0, slidesPerView = 1, ...props}) => {
    return (
            <StyledSwiper
                modules={[Scrollbar]}
                spaceBetween={spaceBetween}
                slidesPerView={slidesPerView}
                loop={false}
                speed={600}
                autoplay={autoplay}
                touchStartPreventDefault = {false}
                {...props}
            >
                {children}
            </StyledSwiper>
            
    )
}

export default CustomSwiper;


const StyledSwiper = styled(Swiper)`
    height: 100%;
    width: 100%;
`