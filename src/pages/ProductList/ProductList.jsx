import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useProduct } from '~/stores/productSlice'

import ProductItem from './ProductItem/ProductItem'

const ProductList = () => {
  const { productList } = useProduct()
  const navigate = useNavigate()
  return (
    <StyledProductList>
      <section className="pageTitle">
        <h1>상품안내</h1>
      </section>

      <section className="actions">
        <button
          className="btn"
          onClick={() => {
            navigate('/cart')
          }}
        >
          장바구니
        </button>
        <button
          className="btn"
          onClick={() => {
            navigate('/favorite')
          }}
        >
          즐겨찾기
        </button>
      </section>

      <section className="container">
        {productList.map(item => {
          return <ProductItem key={item.id} item={item} />
        })}
      </section>
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
      border: 1px solid #2d71c4;
      color: #2d71c4;
      background-color: #fff;
    }
  }
  .container {
    width: 60%;
    height: 450px;
    overflow-y: auto;
    margin: 30px;
  }
`

export default ProductList
