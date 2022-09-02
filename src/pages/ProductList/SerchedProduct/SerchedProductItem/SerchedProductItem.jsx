import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import FavoriteButton from '../../../../components/FavoriteButton'
import {
  useProduct,
  modalHandler,
  purchaseRequest,
  isVisibleHandler,
} from '../../../../stores/productSlice'
const SerchedProductItem = ({ item }) => {
  const navigate = useNavigate()
  const { dispatch, isVisible } = useProduct()
  return (
    <StyledSerchedProductItem>
      <ul>
        <li>은행명 :{item.kor_co_nm}</li>
        <li>상품명 :{item.fin_prdt_nm}</li>
        <li>
          저축한도 :
          {item.max_limit === null ? '한도 없음' : `${item.max_limit}원`}
        </li>
      </ul>
      <div className="actions">
        <button
          className="btn-item"
          onClick={() => {
            navigate(`/productlist/${item.id}`, { state: item })
          }}
        >
          상세정보
        </button>
        <button
          className="btn-item"
          onClick={() => {
            dispatch(purchaseRequest(item))
            dispatch(isVisibleHandler())
            dispatch(modalHandler())
          }}
        >
          상품신청
        </button>
        <FavoriteButton item={item} />
      </div>
    </StyledSerchedProductItem>
  )
}

const StyledSerchedProductItem = styled.div`
  background: linear-gradient(to bottom right, #5d5ffc, #47e975);
  border-radius: 8px;
  margin: 20px;
  box-sizing: border-box;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    li {
      margin: 10px;
    }
  }
  .actions {
    display: flex;
    flex-direction: column;
    .btn-item {
      outline: none;
      padding: 3px 15px;
      box-sizing: border-box;
      border: none;
      background-color: #2d71c4;
      color: #fff;
      box-sizing: border-box;
      margin: 5px 15px;
    }
  }
`

export default SerchedProductItem
