import React, { Children } from 'react'
import styled from 'styled-components'
function HomeProductS({name}) {
  return (
    <StyledHomeProductS>{name}</StyledHomeProductS>
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