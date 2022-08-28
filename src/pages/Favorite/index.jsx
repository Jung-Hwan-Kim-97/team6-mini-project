import React from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { Provider } from 'react-redux';
import styled from 'styled-components'
import { favoriteHandler, useFavorite } from '../../stores/favoriteSlice';
import { useProduct } from '../../stores/productSlice'
import store from '../../stores/store';

function ProductItem({ productList, favorite }) {
  const { dispatch } = useFavorite();
  return (
    <div>
      {productList.map((item, index) => (
        <article className='card' key={index}>
          <div>
            <h3>{item.kor_co_nm}</h3>
            <p>{item.fin_prdt_nm}</p>
          </div>
          <div className='favorite-icon' onClick={() => {dispatch(favoriteHandler(index))}}>
            { favorite.favoriteList ? <AiFillHeart /> : <AiOutlineHeart />}
          </div>
        </article>
      ))}
    </div>
  )
}

function Favorite() {
  const { productList } = useProduct();

  const { favorite } = useFavorite();

  return (
    <Provider store={store}>
      <div>
        {favorite.length === 0 ? <h3>관심상품을 추가해주세요</h3> : favorite}
      </div>
      <StyledProductList>
        <section className="pageTitle">
          <h1>상품안내</h1>
        </section>
        <section className="actions">
          <button className="btn">예금</button>
          <button className="btn">적금</button>
        </section>
        <ProductItem productList={productList} favorite={favorite} />
      </StyledProductList>
    </Provider>
  )
}

const StyledProductList = styled.div`
  margin: auto;
  width: 400px;
  /* border: 1px solid red; */
  height: 600px;

  .pageTitle {
    /* background-color: red; */
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
  }
  .card {
    background-color: #eee;
    border: 1px solid #808080;
    border-radius: 6px;
    margin: 10px auto;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .favorite-icon {
      cursor: pointer;
    }
  }
`

export default Favorite