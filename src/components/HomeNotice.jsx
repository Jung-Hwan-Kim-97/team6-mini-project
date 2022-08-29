import React from 'react'
import styled from 'styled-components'

function HomeNotice() {
  return (
    <StyledHomeNotice>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <span>새소식</span>
      <span>더보기</span>
      </div>
      <div style={{display: 'flex', flexDirection:'column' }}>
      <p>공고 2020.00.00</p>
      <p>공고 2020.00.00</p>
      <p>공고 2020.00.00</p>
      <p>고객센터 1588-0000</p>
      <p>고객센터(해외) 1588-0000</p>
      </div>
    </StyledHomeNotice>
  )
}

export default HomeNotice


const StyledHomeNotice = styled.div`
  background: #00cf12;
  flex-grow: 1;
  margin: 10px;
  /* display: flex; */
  /* justify-content: space-between; */
`