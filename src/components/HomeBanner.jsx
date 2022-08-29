import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper'

import styled from 'styled-components'
function HomeBanner() {
  useEffect(() => {}, [])

  return (
    <StyledHomeBanner>
      <Swiper
        autoplay={{ delay: 2500 }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
      </Swiper>
    </StyledHomeBanner>
  )
}

export default HomeBanner

const StyledHomeBanner = styled.div`
  flex-grow: 1;
  width: 700px;
  height: 330px;
  margin: 10px;
  background: #ccc;
`
