import React, { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'
import styled from 'styled-components'
import { extraData } from '../data/homeData'

function HomeBanner({ dataList }) {
  //추가 데이터로 인해 랜덤 적용 안함
  const [bannerData, setBannerData] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    setBannerData(dataList.slice(0, 3))
  }, [])

  const bannerHandler = useCallback(
    ({ state: list }) => {
      navigate(`/productlist/${list.id}`, { state: list })
    },
    [navigate],
  )

  return (
    <StyledHomeBanner>
      <Swiper
        autoplay={{ delay: 3500 }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
      >
        {bannerData.map((list, index) => (
          <SwiperSlide key={list.id}>
            <div className="wrap">
              <h3>✨ [{list.kor_co_nm}]과 함께하는 이벤트! 🎉</h3>
              <h2>{list.fin_prdt_nm}</h2>
              <p>{extraData[index].explainData}</p>
              <p>{list.join_way}에서 신청</p>
              <p onClick={() => bannerHandler({ state: list })}>바로가기</p>
            </div>
            <img src={extraData[index].bannerImg} />
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledHomeBanner>
  )
}

export default HomeBanner

const StyledHomeBanner = styled.div`
  flex-grow: 1;
  width: 900px;
  height: 400px;
`
