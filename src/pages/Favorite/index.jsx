import React, { useEffect } from 'react'
import styled from 'styled-components'
import FavoriteItem from '../../components/FavoriteItem';
import { useFavorite } from '../../stores/favoriteSlice';
import ProductItem from '../ProductList/ProductItem/ProductItem';

function Favorite() {
  const { favorite } = useFavorite();
  console.log(favorite)

  return (
    <StyledProductList>
        <section className="pageTitle">
          <h1>관심 상품</h1>
        </section>
        {favorite.length === 0 ? <h3>관심상품을 추가해주세요</h3> : favorite.map((item, index) => {
          return <FavoriteItem key={index} item={item} favorite={favorite} />
        })}
    </StyledProductList>
  )
}

const StyledProductList = styled.div`
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
  .actions {
    text-align: center;

    .btn {
      outline: none;
      border: none;
      padding: 5px 40px;
      margin: 10px;
      background-color: ${({ theme }) => theme.palette.cobaltBlue};
      color: #fff;
    }
  }
  .container {
    width: 60%;

    height: 400px;
    overflow-y: auto;
  }
`

export default Favorite