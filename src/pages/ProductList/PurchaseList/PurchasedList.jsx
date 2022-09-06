import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useProduct } from '~/stores/productSlice'
import { useNavigate } from 'react-router-dom'
import PurchaseItem from './PurchaseItem/PurchaseItem'
const PurchasedList = () => {
  const navigate = useNavigate()
  const getPurchasedItem = JSON.parse(localStorage.getItem('product'))

  return (
    <StyledPurchaseList>
      <section className="pageTitle">
        <h1>구매내역</h1>
      </section>

      <section className="actions">
        <button
          className="btn"
          onClick={() => {
            navigate('/')
          }}
        >
          홈으로 가기
        </button>
        <button
          className="btn"
          onClick={() => {
            navigate('/productlist')
          }}
        >
          상품 보러 가기
        </button>
      </section>

      <section className="purchase-list-container">
        {getPurchasedItem?.length > 0 ? (
          getPurchasedItem.map(item => {
            return <PurchaseItem key={item.id} item={item} />
          })
        ) : (
          <p className="null-text">구매내역이 존재하지 않습니다!</p>
        )}
      </section>
    </StyledPurchaseList>
  )
}

const StyledPurchaseList = styled.div`
  margin: auto;
  width: 1320px;
  height: calc(100vh - 126px);
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
  .actions {
    margin: 20px;
    .btn {
      margin: 0 10px;
      outline: none;
      border: 1px solid #2d71c4;
      color: #2d71c4;
      background-color: #fff;
      padding: 5px 15px;
      box-sizing: border-box;
      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
        cursor: pointer;
      }
    }
  }

  .purchase-list-container {
    width: 60%;
    height: 450px;
    overflow-y: auto;
    position: relative;
    margin-bottom: 30px;
    .null-text {
      position: absolute;
      top: 45%;
      left: 30%;
      font-size: 25px;
      font-weight: 700;
      color: #808080;
    }
  }
`

export default PurchasedList
