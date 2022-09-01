import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useProduct } from '../../stores/productSlice'
import AOS from 'aos'
import 'aos/dist/aos.css'
import HomeProductS from '../../components/HomeProductS'
import HomeBanner from '../../components/HomeBanner'
import HomeNav from '../../components/HomeNav'
import HomeFavorite from '../../components/HomeFavorite'

const Home = () => {
  const { productList } = useProduct()

  useEffect(() => {
    AOS.init({ duration: 2000 })
  })

  // 로그인 상태 확인 필요
  const isLogin = true
  const user = '김패캠'

  const html = (
    <StyledWrapper>
      {isLogin ? (
        <StyledLoginArea>
          어서오세요, {user} 님! 😊
          <hr />
        </StyledLoginArea>
      ) : (
        <StyledLoginArea>
          로그인을 해주세요 <hr />
        </StyledLoginArea>
      )}
      <HomeBanner data={productList} />
      <div>
        <HomeNav data-aos="fade-up" />
      </div>
      <StyledContainer data-aos="fade-up">
        <p className="title">
          이 상품에 관심있으셨나요? 즐겨찾기 목록을 빠르게 확인하세요! 🔎
        </p>
        <HomeFavorite />
      </StyledContainer>
      <StyledContainer data-aos="fade-up">
        <p className="title">고객님을 위한 맞춤 추천! 🌟</p>
        <div className="wrap">
          <HomeProductS data={productList} />
        </div>
      </StyledContainer>
      <StyledContainer data-aos="fade-up">
        <p className="title">
          FastBank의 또 다른 추천 상품을 확인해 보세요! 🪄
        </p>
        <div className="wrap">
          <HomeProductS data={productList} />
        </div>
      </StyledContainer>
    </StyledWrapper>
  )
  return html
}

export default Home

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5rem auto;
  max-width: 1000px;
  align-items: space-between;
  justify-content: space-between;
`

const StyledContainer = styled.div`
  font-weight: 700;
  margin: 10px 0;

  .title {
    font-weight: 600;
    font-size: 18px;
    padding-bottom: 10px;
    border-bottom: #ccc solid 1px;
    margin-bottom: 15px;
  }

  .wrap {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const StyledLoginArea = styled.div`
  flex-grow: 1;
  font-size: 21px;
  font-weight: 500;
`
