import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useProduct } from '~/stores/productSlice'
import PurchaseItem from './PurchaseItem/PurchaseItem'
const PurchasedList = () => {
  const { dispatch, purchasedList } = useProduct()

  console.log(purchasedList)

  return (
    <StyledPurchaseList>
      <section className="pageTitle">
        <h1>구매내역</h1>
      </section>

      <section className="purchase-list-container">
        {purchasedList.length > 0 ? (
          purchasedList.map(item => {
            return <PurchaseItem key={item.id} />
          })
        ) : (
          <p className="null-text">구매내역이 존재하지 않습니다!</p>
        )}
      </section>

      <section className="actions">
        <button className="btn">홈으로 가기</button>
        <button className="btn">상품 보러 가기</button>
      </section>
    </StyledPurchaseList>
  )
}

const StyledPurchaseList = styled.div`
  margin: auto;
  width: 1320px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .pageTitle {
    width: 100%;
    margin: 40px 0 30px 0;
    border-bottom: 2px solid #808080;
    box-sizing: border-box;
    h1 {
      font-size: 25px;
      margin-bottom: 20px;
    }
  }
  .purchase-list-container {
    width: 60%;
    height: 450px;
    border: 1px solid red;
    overflow-y: auto;
    position: relative;
    .null-text {
      position: absolute;
      top: 45%;
      left: 30%;
      font-size: 25px;
      font-weight: 700;
      color: #808080;
    }
  }
  .actions {
    margin: 20px;
    .btn {
      margin: 0 10px;
    }
  }
`

export default PurchasedList
