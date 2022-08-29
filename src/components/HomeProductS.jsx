import React, { Children } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

function HomeProductS({name, url}) {
  const navigate = useNavigate();

  return (
    <StyledHomeProductS onClick={() => navigate(url)}>{name}</StyledHomeProductS>
  )
}

export default HomeProductS


const StyledHomeProductS = styled.div`
  background: #ff9019;
  margin: 10px;
  width: 331px;
  height: 155px;
  border-radius: 0.3rem;
  flex-grow: 1;
`