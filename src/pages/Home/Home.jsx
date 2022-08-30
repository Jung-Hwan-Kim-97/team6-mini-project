import React from 'react'
import HomeProductS from '../../components/HomeProductS'
import HomeBanner from '../../components/HomeBanner'
import HomeNav from '../../components/HomeNav'
import styled from 'styled-components'
import { result } from '../../data/data.json'

const Home = () => {
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
      <StyledContainer>
        <HomeBanner data={result} />
      </StyledContainer>
      <HomeNav />
      <p
        style={{
          fontWeight: '600',
          fontSize: '18px',
          paddingBottom: '10px',
          borderBottom: '#ccc solid 1px',
        }}
      >
        고객님을 위한 맞춤 추천! 🌟
      </p>
      <StyledContainer>
        <HomeProductS name={'직업/나이맞춘추천상품1'} />
        <HomeProductS name={'직업/나이맞춘추천상품2'} />
        <HomeProductS name={'직업/나이맞춘추천상품3'} />
      </StyledContainer>
      <p
        style={{
          fontWeight: '600',
          fontSize: '18px',
          paddingBottom: '10px',
          borderBottom: '#ccc solid 1px',
        }}
      >
        FastBank의 또 다른 추천 상품을 확인해 보세요! 🪄
      </p>
      <StyledContainer>
        <HomeProductS name={'추천상품1'} />
        <HomeProductS name={'추천상품2'} />
        <HomeProductS name={'추천상품3'} />
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
  display: flex;
  font-weight: 700;
  margin: 10px 0;
  justify-content: space-between;
`

const StyledLoginArea = styled.div`
  flex-grow: 1;
  font-size: 21px;
  font-weight: 500;
`
