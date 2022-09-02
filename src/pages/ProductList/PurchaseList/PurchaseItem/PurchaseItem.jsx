import React from 'react'
import styled from 'styled-components'
import { FaMoneyCheckAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { removePurchaseItem, useProduct } from '../../../../stores/productSlice'
const PurchaseItem = ({ item }) => {
  const navigate = useNavigate()
  const { dispatch } = useProduct()
  return (
    <StyledPurchaseItem>
      <ul>
        <li>은행명 :{item.kor_co_nm}</li>
        <li>상품명 :{item.fin_prdt_nm}</li>
        <li>
          저축한도 :
          {item.max_limit === null ? '한도 없음' : `${item.max_limit}원`}
        </li>
        <li>구매일 :{item.purchaseTime}</li>
        <li>
          <div>
            <button
              onClick={() => {
                navigate(`/productlist/${item.id}`, { state: item })
              }}
            >
              상세보기
            </button>
            <button
              onClick={() => {
                dispatch(removePurchaseItem(item))
              }}
            >
              구매취소
            </button>
          </div>
        </li>
      </ul>
      <div className="money">
        <FaMoneyCheckAlt color="#000080" size="150" />
      </div>
    </StyledPurchaseItem>
  )
}

const StyledPurchaseItem = styled.div`
  background: linear-gradient(to bottom right, #5d5ffc, #47e975);
  border-radius: 8px;
  margin: 20px;
  box-sizing: border-box;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  ul {
    padding: 10px;
    li {
      margin: 10px 0 10px 5px;
    }
  }
  .money {
    padding: 10px 35px;
    color: red;
    img {
      background-color: #808080;
      width: 150px;
      height: 150px;
    }
  }
`

export default PurchaseItem
