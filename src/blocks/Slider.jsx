import { colors } from '@/constants';
import { Check, Container, Section, ArrowUp } from '@/ui';
import { CustomSwiper, SwiperNavigation } from '@/components';
import styled from 'styled-components';
import { SwiperSlide } from "swiper/react";
import { useState, useRef, useEffect } from 'react';
import { Swiper, useSwiper } from 'swiper/react';

const Slider = ({ data }) => {
    const { items } = data;

    const [currentSlide, setCurrentSlide] = useState(0);

    const sliderContainer = useRef(null)
    const caseRef = useRef(null)

    const onSlideChange = (props) => {
        setCurrentSlide(props.activeIndex)
    }

    // const showIcon = (item) => {
    //     return () => {
    //         item.style.display = 'flex';
    //     }
    // }

    // const hideIcon = (item) => {
    //     return () => {
    //         item.style.display = 'none';
    //     }
    // }

    // const definePosition = (event) => {
    //     const container = sliderContainer.current;
    //     const image = caseRef.current;
    //     const {top, left} = container.getBoundingClientRect();
        
    //     image.style.left = `${event.pageX - left - 61}px`;
    //     image.style.top = `${event.pageY - top - window.scrollY - 61}px`;
    // }

    // const defineScrollPosition = (event) => {
    //     console.log(scrollY + 'px');
    //     const container = sliderContainer.current;
    //     const image = caseRef.current;
    //     const {top} = container.getBoundingClientRect();
        
    //     image.style.top = `${event.pageY - top - window.scrollY - 61}px`;

    //     // const container = sliderContainer.current;
    //     // const image = caseRef.current;
    //     // const {top, left} = container.getBoundingClientRect();
        
    //     // image.style.left = `${event.pageX - left - 61}px`;
    //     // image.style.top = `${event.pageY - top - window.scrollY - 61}px`;
    // }

    // useEffect(() => {
    //     const container = sliderContainer.current;
    //     const image = caseRef.current;

    //     const show = showIcon(image);
    //     const hide = hideIcon(image);

    //     container.addEventListener('mouseover', show)
    //     container.addEventListener('mouseout', hide);
    //     container.addEventListener('mousemove', definePosition);
    //     window.addEventListener('scroll', defineScrollPosition);
        
    //     return () => {
    //         container.removeEventListener('mouseover', show)
    //         container.removeEventListener('mouseout', hide)
    //         container.removeEventListener('mousemove', definePosition);
    //         window.removeEventListener('scroll', defineScrollPosition);
    //     }
    // }, [])

    const openCase = () => {
        const image = caseRef.current;
        image.classList.add("bounceOut")
    }

    return (
        <Section>
            <Container>
                <SliderContainer ref={sliderContainer}>
                    <CustomSwiper
                        slidesPerView={1}
                        navigation={{
                            prevEl: '.slider-prev',
                            nextEl: '.slider-next',
                        }}
                        scrollbar={{
                            hide: false,
                            el: '.slider-scrollbar',
                            draggable: false,
                        }}
                        onSlideChange={onSlideChange}
                    >
                        {items.map((item, index) =>
                            <SwiperSlide key={index}>
                                <StyledSlide src={item.image} alt={item.altText} />
                            </SwiperSlide>
                        )}

                    </CustomSwiper>
                    {/* <StyledCase ref={caseRef} className="animated">
                            <span>Кейс</span>
                            <ArrowUp />
                    </StyledCase> */}
                </SliderContainer>
                <SwiperNavigation theme="white" className='slider' />
            </Container>
        </Section>
    )
}

export default Slider;

const SliderContainer = styled.div`
    position: relative;
    cursor: url('./images/case075.png') 32 32, auto;
`

const StyledCase = styled.div`
    display: none;
    z-index: 1;
    width: 132px;
    height: 132px;
    position: absolute;
    top: 0;
    pointer-events: none;
    display: flex;
	justify-content: center;
	align-items: center;
    border-radius: 50%;
    background-color: ${colors.white};

    span {
        margin-right: 10px;
    }

    /* @media screen and (min-width: 1024px) {
    } */
`

const StyledSlide = styled.img`
    width: 100%;
`







