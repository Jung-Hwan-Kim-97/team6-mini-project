import React, { useCallback, useEffect } from 'react'
import styled from 'styled-components'
import { useProduct } from '../../stores/productSlice'
import { useSelector } from 'react-redux'
import AOS from 'aos'
import 'aos/dist/aos.css'
import HomeProduct from '../../components/HomeProduct'
import HomeBanner from '../../components/HomeBanner'
import HomeNav from '../../components/HomeNav'
import HomeFavorite from '../../components/HomeFavorite'
import { getUserInfo, hasLocalData } from '../../utils'

import HomeButton from '../../components/HomeButton'
import { productListData } from '../../data/homeData'
const Home = () => {
  const isLogin = useSelector(state => state.user.isLogin) || hasLocalData
  const userName =
    useSelector(state => state.user.profile?.userName) ||
    getUserInfo()?.userName
  const { productList } = useProduct()
  const init = useCallback(() => {
    AOS.init({ duration: 2000 })
  }, [])

  useEffect(() => {
    init()
  }, [productList, userName, isLogin])

  const HomeProductList = productListData.map(list => (
    <StyledContainer
      key={list.id}
      data-aos="fade-up"
      data-aos-duration={
        list.aosDuration === 'init' ? '2000' : list.aosDuration
      }
    >
      <p className="title">{list.title}</p>
      <div className="wrap">
        <HomeProduct dataList={productList} />
      </div>
    </StyledContainer>
  ))

  const html = (
    <StyledWrapper>
      {/* 로그인 */}
      <StyledLoginArea>
        {isLogin ? (
          <p>어서오세요, {userName} 님! 😊</p>
        ) : (
          <p>로그인을 해주세요</p>
        )}
        {/* 관심상품/장바구니 버튼 */}
        <div>
          <HomeButton urlPath="/favorite" name="관심상품 🌟" />
          <HomeButton urlPath="/cart" name="장바구니 👜" />
        </div>
      </StyledLoginArea>

      {/* HomeBanner */}
      <HomeBanner dataList={productList} />

      {/* HomeNav */}
      <div data-aos="fade-up">
        <HomeNav />
      </div>

      {/* HomeProduct 1, 2, 3 */}
      {HomeProductList}
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
  font-size: 21px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid green;
`
