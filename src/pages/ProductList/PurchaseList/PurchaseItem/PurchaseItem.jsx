import React from 'react'
import styled from 'styled-components'

const PurchaseItem = () => {
  return (
    <StyledPurchaseItem>
      <ul>
        <li>은행명:</li>
        <li>상품명 :</li>
        <li>상품가격 :</li>
        <li>저축한도 :</li>
      </ul>
    </StyledPurchaseItem>
  )
}

const StyledPurchaseItem = styled.div`
  background: linear-gradient(to bottom right, #5d5ffc, #47e975);
  border-radius: 8px;
  margin: 20px;
  box-sizing: border-box;
  padding: 10px 0;
  li {
    margin: 10px 0 10px 5px;
  }
`

export default PurchaseItem
