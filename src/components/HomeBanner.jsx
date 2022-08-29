import React from 'react'
import styled from 'styled-components'
function HomeBanner() {
  return (
    <StyledHomeBanner>HomeBanner</StyledHomeBanner>
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