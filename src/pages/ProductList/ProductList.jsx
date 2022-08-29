import React from 'react'
import styled from 'styled-components'
import { useProduct } from '~/stores/productSlice'

import ProductItem from './ProductItem/ProductItem'

const ProductList = () => {
  const { productList } = useProduct()
  console.log(productList)
  return (
    <StyledProductList>
      <section className="pageTitle">
        <h1>상품안내</h1>
      </section>
      <section className="actions">
        <button className="btn">예금</button>
        <button className="btn">적금</button>
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

export default ProductList
