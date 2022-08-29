import React from 'react'
import styled from 'styled-components'
function HomeProductM() {
  return (
    <StyledHomeProductM>
      <div>
        <p style={{ width: '220px', height: '240px', backGround: '#fff' , border: '1px solid red'}}>추천상품 이미지</p>
      </div>
      <div style={{width: '311px'}}>      
        <p>상품명</p>
        <p>내용이 들어갈 것 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ullam. Sed impedit quod tempore sunt, blanditiis eligendi architecto exercitationem assumenda molestiae non officiis animi necessitatibus ducimus totam omnis nihil laudantium!</p>
      </div>
    </StyledHomeProductM>
  )
}

export default HomeProductM


const StyledHomeProductM = styled.div`
background: #5a7aa7;
display: flex;
margin: 10px;
width: 630px;
height: 330px;
border-radius: 0.3rem;
align-items: center;
justify-content: space-around;
`