import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import * as S from "./Banner.style";

const Banner = () => {
  const SLIDE_LIST = [
    {src: "", alt: "1번 슬라이드 😡"},
    {src: "", alt: "2번 슬라이드 🤢"},
    {src: "", alt: "3번 슬라이드 🥶"},
  ]

  return (
    <section>
      <S.HiddenTitle>배너</S.HiddenTitle>
      <Swiper
        modules={[Autoplay, Pagination]}
        loop={true}
        pagination={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {
          SLIDE_LIST.map((slide) => {
            return (
              <SwiperSlide key={slide.alt}>
                <S.SlideImg src={slide.src} alt={slide.alt} />
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  );
};

export default Banner;
