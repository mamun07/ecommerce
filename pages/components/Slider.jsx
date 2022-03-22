import React from "react";
import { Image } from "react-bootstrap";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        effect={"cards"}
      >
        <SwiperSlide>
          <Image
            width={900}
            height={500}
            src="/images/1.jpg"
            alt="banner one"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={900}
            height={500}
            src="/images/1.jpg"
            alt="banner one"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={900}
            height={500}
            src="/images/1.jpg"
            alt="banner one"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
