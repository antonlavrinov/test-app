import SwiperCore, { Navigation, Scrollbar, A11y, Thumbs } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import styled from 'styled-components'
import { useState } from 'react';
import CloseFullScreenIcon from '../assets/slider-fullscreen-close.svg'



const SliderMainWrapper = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100%;
    margin-bottom: 25px;
    background: black;
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    padding: 90px 0;
    display: flex;
    z-index: 10;
    align-items: center;
    justidy-content: center;

    .swiper-button-next, .swiper-button-prev {
        width: 55px;
        height: 55px;
        border-radius: 50px;
        background: #1A1A1A;
        :after {
            color: var(--white);
            font-size: 20px;
            font-weight: bold;
        }
        :hover {
            background: var(--white);
            :after {
                color: black;
            }
        }
    }

    .swiper-button-disabled {
        display: none;
    }

`


const SliderItem = styled.div`
    height: 100%;
    width: 100%;
    margin: 0 auto;
    ${props => props.imageUrl && `
        background-image: url(${props.imageUrl});
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
    `}

    @media only screen and (min-width: 768px) {
        width: 85%;
    }
`


const SliderThumbsWrapper = styled.div`
    width: 100%;
    height: 96px;
    padding-bottom: 15px;
    padding-top: 15px;
    display: flex;
    justify-content: center;
    background: black;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 15;

    .swiper-slide {
        opacity: 0.4;
        :hover {
            opacity: 1;
        }   
    }

    .swiper-slide-thumb-active {
        opacity: 1;
        :hover {
            cursor: default;
        }
    }

    .swiper-wrapper {
        display: flex;
        justify-content: center;
    }
    .swiper-slide {
        width: 120px !important;
    }




`


const SliderThumb = styled.div`
    height: 100%;
    border-radius: 10px;
    width: 120px;
    ${props => props.imageUrl && `
        background-image: url(${props.imageUrl});
        background-size: cover;
        background-position: center;
    `} 

`

const CloseFullScreen = styled.div`
    position: absolute;
    width: 55px;
    height: 55px;
    border-radius: 50px;
    background: #1A1A1A;
    top: 10px;
    right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
        fill: var(--white);
        width: 20px;
        height: 20px;
    }
    :hover {
        opacity: 1;
        cursor: pointer;
        background: var(--white);
        svg {
            fill: black;
        }

    }

`



SwiperCore.use([Navigation, Scrollbar, A11y, Thumbs]);

export const Slider = ({screenshots, closeFullScreen, currentScreenshot}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

  
  
    return (
        <>
            <SliderMainWrapper
            >
                    <CloseFullScreen onClick={closeFullScreen}>
                        <CloseFullScreenIcon/>
                    </CloseFullScreen>
                    <Swiper 
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        thumbs={{ swiper: thumbsSwiper }}
                        initialSlide={currentScreenshot}
                        navigation
                        >
                        {screenshots.map((screenshot) => {
                            return (
                                <SwiperSlide key={screenshot.id}>
                                    <SliderItem imageUrl={screenshot.image}></SliderItem>
                                </SwiperSlide>
                            )
                        })}

                    </Swiper>


            </SliderMainWrapper>
            <SliderThumbsWrapper>
                    <Swiper 
                        spaceBetween={20}
                        slidesPerView={screenshots.length} 
                        onSwiper={setThumbsSwiper}
                        className="slider-thumb">
                        {screenshots.map((screenshot) => {

                            return (
                                <SwiperSlide key={screenshot.id}>
                                    <SliderThumb imageUrl={screenshot.image}></SliderThumb>
                                </SwiperSlide>
                            )
                        })}

                    </Swiper>
            </SliderThumbsWrapper>
        </>
  );
};

export default Slider;