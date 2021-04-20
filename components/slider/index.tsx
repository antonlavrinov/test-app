import SwiperCore, {
  Navigation,
  Scrollbar,
  A11y,
  Thumbs,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import CloseFullScreenIcon from "../../assets/slider-fullscreen-close.svg";
import * as SC from "./Slider";

SwiperCore.use([Navigation, Scrollbar, Pagination, A11y, Thumbs]);

type SliderProps = {
  screenshots: any;
  closeFullScreen: any;
  currentScreenshot: any;
};

const Slider: React.FC<SliderProps> = ({
  screenshots,
  closeFullScreen,
  currentScreenshot,
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <SC.MainWrapper>
        <SC.CloseFullScreen onClick={closeFullScreen}>
          <CloseFullScreenIcon />
        </SC.CloseFullScreen>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation
          thumbs={{ swiper: thumbsSwiper }}
          initialSlide={currentScreenshot}
          pagination={{
            clickable: true,
          }}
        >
          {screenshots.map((screenshot) => {
            return (
              <SwiperSlide key={screenshot.id}>
                <SC.Item imageUrl={screenshot.image}></SC.Item>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </SC.MainWrapper>
      <SC.ThumbsWrapper>
        <Swiper
          slidesPerView={screenshots.length}
          spaceBetween={10}
          onSwiper={setThumbsSwiper}
          className="slider-thumb"
        >
          {screenshots.map((screenshot) => {
            return (
              <SwiperSlide key={screenshot.id}>
                <SC.Thumb imageUrl={screenshot.image}></SC.Thumb>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </SC.ThumbsWrapper>
    </>
  );
};

export default Slider;
