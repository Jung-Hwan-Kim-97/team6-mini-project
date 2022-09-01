import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'
import styled from 'styled-components'

function HomeBanner({ data }) {
  const bannerData = data.slice(0, 3)
  const explainData = [
    '고객님만을 위한 특별한 적금, THIS IS ALL FOR YOU! 안성 맞춤 서비스를 만나보세요',
    '흩어진 자산, 한 눈에 모아 관리하고 부자되세요!',
    '우리아이 행복을 위한 프로젝트, 우리은행과 함께 처음부터 천천히 지금 시작하세요~',
  ]
  const bannerImg = [
    'https://firebasestorage.googleapis.com/v0/b/imgsources.appspot.com/o/1.jpg?alt=media&token=91efc01b-2ecf-4356-b90d-e298c140903e',
    'https://firebasestorage.googleapis.com/v0/b/imgsources.appspot.com/o/2.png?alt=media&token=2a0bf811-fecd-478e-81e1-872a9109ed80',
    'https://firebasestorage.googleapis.com/v0/b/imgsources.appspot.com/o/3.jpg?alt=media&token=aa35bba6-7f8c-4c3e-95b2-d64f39a51238',
  ]
  const navigate = useNavigate()

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
              <p>{explainData[index]}</p>
              <p>{list.join_way}에서 신청</p>
              <p
                onClick={() => {
                  navigate(`/productlist/${list.id}`, { state: list })
                }}
              >
                바로가기
              </p>
            </div>
            <img src={bannerImg[index]} />
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
