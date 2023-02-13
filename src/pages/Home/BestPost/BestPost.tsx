import React from "react";
import * as S from "./BestPost.style";
import BestPostItem from "./BestPostItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const BestPost = () => {
  return (
    <S.Wrapper>
      <h3>중요/공유/베스트 글</h3>
      <Swiper
        slidesPerView={3}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <BestPostItem />
        </SwiperSlide>
        <SwiperSlide>
          <BestPostItem />
        </SwiperSlide>
        <SwiperSlide>
          <BestPostItem />
        </SwiperSlide>
        <SwiperSlide>
          <BestPostItem />
        </SwiperSlide>
      </Swiper>
    </S.Wrapper>
  );
};

export default BestPost;
