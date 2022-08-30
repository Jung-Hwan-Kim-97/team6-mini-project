import React, { Children } from 'react'
import styled from 'styled-components'
function HomeProductS({ name }) {
  return (
    <StyledHomeProductS>
      {name}
      <hr />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita quod
        facere animi praesentium dicta, non veniam porro? Quisquam, porro.
        Voluptatibus placeat cumque nulla eos ratione necessitatibus distinctio
        tenetur tempore omnis?
      </p>
      <hr />
      <p>
        Lorem ipsum sit amet, Expedita quod facere animi praesentium dicta, non
        veniam porro? Quisquam, porro. Voluptatibus placeat cumque nulla eos
        ratione necessitatibus distinctio tenetur tempore omnis? Voluptatibus
        placeat cumque nulla eos ratione necessitatibus distinctio Voluptatibus
        placeat cumque nulla eos ratione necessitatibus distinctio
      </p>
    </StyledHomeProductS>
  )
}

export default HomeProductS

const StyledHomeProductS = styled.div`
  border: 2px solid blue;
  margin: 15px;
  width: 350px;
  height: 350px;
  border-radius: 0.3rem;
`
