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
          <h3 className='bank-name'>{item.kor_co_nm}</h3>
          <h2 className='product-title'>{item.fin_prdt_nm}</h2>
          <pre className='product-content'>{item.mtrt_int}</pre>
          <p className='product-price'>상품 가격: {(item.max_limit).toLocaleString()}원</p>
        </div>
        <div className="button-box">
          <div className='action-buttons'>
            <button className="btn shopping-cart">
              <FaShoppingCart color='#80BFDE' />
            </button>
            <FavoriteButton item={item} />
          </div>
          <div className='origin-buttons'>
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
        </div>
      </article>
    </StyledFavoriteItem>
  )
}

const StyledFavoriteItem = styled.section`
  background: #FBFDFF;
  border: 1px solid #2D71C4;
  border-radius: 20px;
  margin: 20px;
  padding: 20px 20px 42px;
  width: 60%;
  box-sizing: border-box;
  .item-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    .item-info {
      .bank-name {
        font-size: 16px;
      }
      .product-title {
        font-size: 22px;
        font-weight: 700;
        color: #2D71C4;
        margin: 10px 0;
        word-break: keep-all;
      }
      .product-content {
        font-size: 12px;
        margin-bottom: 10px;
        line-height: 16px;
      }
      .product-price {
        font-size: 22px;
        position: absolute;
        bottom: -22px;
        right: 4px;
      }
    }
    .button-box {
      display: flex;
      align-items: flex-end;
      flex-direction: column;
      div {
        display: inline-flex;
      }
      .action-buttons {
        gap: 12px;
        position: absolute;
        top: 0;
      }
      .origin-buttons {
        position: relative;
        bottom: -40px;
      }
      .btn {
        margin: 0 5px;
        outline: none;
        border: none;
        padding: 6px 20px;
        background-color: ${({ theme }) => theme.palette.cobaltBlue};
        color: #fff;
        font-size: 16px;
        white-space: nowrap;
        border-radius: 12px;
        cursor: pointer;
        &.shopping-cart {
          background-color: transparent;
          font-size: 30px;
          padding: 0;
          margin: 0;
        }
      }
    }
  }
`

export default FavoriteItem