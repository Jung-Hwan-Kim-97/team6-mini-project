import React from 'react'
import styled from 'styled-components'
import FavoriteItem from '../../components/FavoriteItem';
import { useFavorite } from '../../stores/favoriteSlice';

function Favorite() {
  const { favorite } = useFavorite();
  console.log(favorite)

  return (
    <StyledFavoritePage>
        <section className="page-title">
          <h1 className='title-name'>관심 상품</h1>
        </section>
        {favorite.length === 0 ? <h3>관심상품을 추가해주세요</h3> : favorite.map((item, index) => {
          return <FavoriteItem key={index} item={item} />
        })}
    </StyledFavoritePage>
  )
}

const StyledFavoritePage = styled.main`
  margin: auto;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.whiteColor};
  .page-title {
    width: 80%;
    margin: 40px 0 30px 0;
    border-bottom: 2px solid #808080;
    box-sizing: border-box;
    .title-name {
      font-size: 25px;
      margin-bottom: 20px;
    }
  }
`

export default Favorite