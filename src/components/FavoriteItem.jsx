import React from 'react'
import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useFavorite } from '../stores/favoriteSlice';
import { modalHandler } from '../stores/productSlice';
import FavoriteButton from './FavoriteButton';

function FavoriteItem({ item }) {
  const { dispatch } = useFavorite();
  const navigate = useNavigate()

  return (
    <StyledFavoriteItem>
      <article className="item-container">
        <div className="item-info">
          <h3>{item.kor_co_nm}</h3>
          <h2>{item.fin_prdt_nm}</h2>
          <p>{item.mtrt_int}</p>
          <p>상품 가격: {item.max_limit}원</p>
        </div>
        <div className="button-box">
          <button className="btn">
            <FaShoppingCart />
          </button>
          <FavoriteButton item={item} />
          <button
            className="btn"
            onClick={() => {
              dispatch(modalHandler())
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
        </div>
      </article>
    </StyledFavoriteItem>
  )
}

const StyledFavoriteItem = styled.section`
  background: linear-gradient(to bottom right, #5d5ffc, #47e975);
  border-radius: 8px;
  margin: 20px;
  box-sizing: border-box;
  padding: 10px 0;
  box-sizing: border-box;
  .item-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .item-info {
      padding: 10px;
      box-sizing: border-box;
      h2 {
        margin-bottom: 10px;
      }
    }
    .button-box {
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

export default FavoriteItem