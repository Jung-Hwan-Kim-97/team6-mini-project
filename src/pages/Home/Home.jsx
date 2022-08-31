import React from 'react'
import HomeProductS from '../../components/HomeProductS'
import HomeProductM from '../../components/HomeProductM'
import HomeBanner from '../../components/HomeBanner'
import HomeNotice from '../../components/HomeNotice'
import styled from 'styled-components'

const Home = () => {
  const isLogin = true
  const user = '김패캠'
  const html = (
    <StyledWrapper>
      {isLogin ? (
        <StyledLoginArea>(프로필이미지) {user} 님</StyledLoginArea>
      ) : (
        <StyledLoginArea>로그인을 해주세요</StyledLoginArea>
      )}

      <StyledContainer>
        <HomeBanner>광고용 배너(스와이퍼 적용예정)</HomeBanner>
        <div>
          <HomeProductS name={'금융 상품'} url={'productlist'} />
          <HomeProductS name={'관심 상품'} url={'favorite'} />
        </div>
      </StyledContainer>

      <StyledContainer>
        <HomeProductM>추천상품 안내</HomeProductM>
        <HomeNotice>새소식</HomeNotice>
      </StyledContainer>

      <StyledContainer>
        <HomeProductS name={'추천상품아이콘1'} />
        <HomeProductS name={'추천상품아이콘2'} />
        <HomeProductS name={'추천상품아이콘3'} />
      </StyledContainer>
    </StyledWrapper>
  )

  return html
}

export default Home

const StyledWrapper = styled.div`
  border: 1px solid green;
  display: flex;
  flex-direction: column;
  margin: 5rem auto;
  width: 95%;
  align-items: space-between;
  justify-content: space-between;
`

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const StyledLoginArea = styled.div`
  flex-grow: 1;
  margin: 10px;
  height: 40px;
  background: #3689ff;
`
