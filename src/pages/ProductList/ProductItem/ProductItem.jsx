import React, { useEffect } from 'react'

import styled from 'styled-components'
//react-icons
import { BsFillSuitHeartFill } from 'react-icons/bs'
//productSlice
import {
  useProduct,
  modalHandler,
  purchaseRequest,
  isVisibleHandler,
} from '../../../stores/productSlice'
//react-router-dom
import { useNavigate } from 'react-router-dom'
const ProductItem = ({ item }) => {
  const { dispatch, purchasedList, purchaseItem } = useProduct()
  const navigate = useNavigate()

  const purchaseRequestHandler = item => {
    if (purchasedList.includes(item)) {
      alert('이미 구매하신 상품입니다!')
      return
    }
    // {
    //   ...item,
    //   purchaseTime: dayjs().format('YYYY년 MM월 DD일 HH시 mm분'),
    // }
    dispatch(purchaseRequest(item))
    dispatch(isVisibleHandler())
    dispatch(modalHandler())
  }

  return (
    <StyledProductItem>
      <div className="item-container">
        <div className="left-info">
          <h2>{item.fin_prdt_nm}</h2>
          <p>상품 가격: {item.max_limit}원</p>
        </div>
        <div className="actions">
          <button
            className="btn"
            onClick={() => {
              purchaseRequestHandler(item)
            }}
          >
            신청하기
          </button>
          <button
            className="btn"
            onClick={() => {
              navigate(`/productlist/${item.id}`, { state: item })
            }}
          >
            상세보기
          </button>
          <button className="btn btn_favorite">
            <BsFillSuitHeartFill color="80BFDE" size="22" />
          </button>
        </div>
      </div>
    </StyledProductItem>
  )
}

const StyledProductItem = styled.div`
  background: linear-gradient(to bottom right, #5d5ffc, #47e975);
  border-radius: 8px;
  margin: 20px;
  box-sizing: border-box;
  padding: 10px 0;
  .item-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left-info {
      padding: 10px;
      box-sizing: border-box;
      h2 {
        margin-bottom: 10px;
      }
    }
    .actions {
      margin-right: 10px;
      .btn {
        margin: 0 5px;
        outline: none;
        border: none;
        padding: 5px 20px;
        background-color: ${({ theme }) => theme.palette.cobaltBlue};
        color: #fff;
      }
      .btn_favorite {
        background-color: transparent;
        padding: 0;
      }
    }
  }
`

export default ProductItem
