import React from 'react'
import styled from 'styled-components'

function HomeFavorite() {
  return (
    <StyledHomeFavorite>
      <div>목록</div>
      바로가기
    </StyledHomeFavorite>
  )
}

export default HomeFavorite
const StyledHomeFavorite = styled.div`
  text-decoration: underline;
`
