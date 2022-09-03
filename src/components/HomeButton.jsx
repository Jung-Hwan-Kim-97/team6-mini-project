import { useNavigate } from 'react-router-dom'
import React, { useEffect, useCallback } from 'react'

import styled from 'styled-components'

function HomeButton({ urlPath, name }) {
  const navigate = useNavigate()
  useEffect(() => {}, [navigate])

  const favoriteHandler = useCallback(() => {
    navigate(urlPath)
  }, [navigate])

  return <StyledHomeButton onClick={favoriteHandler}>{name}</StyledHomeButton>
}

export default HomeButton
const StyledHomeButton = styled.button`
  color: #ffffff;
  background-color: #5a81ff;
  border: none;
  padding: 10px;
  border-radius: 5px;
  margin: 0 0 5px 5px;
  :hover {
    background-color: #3e95ff;
    color: #fff;
    cursor: pointer;
    transition: all 0.2s;
  }
`
