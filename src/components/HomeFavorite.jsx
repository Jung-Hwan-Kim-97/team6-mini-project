import React from 'react'
import { useNavigate } from 'react-router-dom'

import styled from 'styled-components'

function HomeFavorite() {
  const navigate = useNavigate()

  return (
    <StyledHomeFavorite
      onClick={() => {
        navigate('/favorite')
      }}
    >
      즐겨찾기 🌟
    </StyledHomeFavorite>
  )
}

export default HomeFavorite
const StyledHomeFavorite = styled.button`
  color: #fff;
  background-color: #2d71c3;
  border: none;
  padding: 10px;
  border-radius: 5px;

  :hover {
    background-color: #3e95ff;
    color: #fff;
    cursor: pointer;
    transition: all 0.2s;
  }
`
