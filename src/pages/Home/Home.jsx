import React from 'react'
import HomeProductS from '../../components/HomeProductS'
import HomeProductM from '../../components/HomeProductM'
import HomeBanner from '../../components/HomeBanner'
import HomeNotice from '../../components/HomeNotice'
import styled from 'styled-components'



/* feat4 list ---
x Home.jsx 생성
x 경로 path='/'로 적용
  스와이퍼 사용
x 컴포넌트 목록 적용

+ css 적용 필요

메인 영역 컴포넌트 목록
x 헤더
x 푸터
x 배너
x 금융상품
x 관심상품
x 추천상품
x 새소식
x 추천상품 아이콘3개*/



const Home = () => {

  const isLogin = true
  const user = 'user' 
  const html = 
  <StyledWrapper>
    {isLogin ? <StyledLoginArea >(프로필이미지) {user} 님</StyledLoginArea> : <StyledLoginArea >로그인을 해주세요</StyledLoginArea>}
    
    <StyledContainer >  
    <HomeBanner >광고용 배너(스와이퍼 적용예정)</HomeBanner>
    <div>
    <HomeProductS name={'금융 상품'} />
    <HomeProductS name={'관심 상품'} />
    </div>
    </StyledContainer >
  
    <StyledContainer >
    <HomeProductM >추천상품 안내</HomeProductM>
    <HomeNotice >새소식</HomeNotice>
    </StyledContainer >

    <StyledContainer >
    <HomeProductS name={'추천상품아이콘1'} />
    <HomeProductS name={'추천상품아이콘2'} />
    <HomeProductS name={'추천상품아이콘3'} />
    </StyledContainer >
    
  </StyledWrapper>

  return html
}

export default Home

const StyledWrapper = styled.div `
border: 1px solid green;
  display: flex;
  flex-direction: column;
  margin: 5rem auto;
  width: 85%;
  align-items: space-between;
  justify-content: space-between;
`

const StyledContainer = styled.div`
  display: flex;
  justify-content : space-between;
`

const StyledLoginArea = styled.div`
  flex-grow: 1;
  margin: 10px;
  height: 40px;
  background: #3689ff;
`