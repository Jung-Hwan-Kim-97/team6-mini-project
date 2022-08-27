import React from 'react'
import styled from 'styled-components'

const ProductList = () => {
  return (
    <StyledProductList>
      <section className="pageTitle">
        <h1>상품안내</h1>
      </section>
      <section className="actions">
        <button className="btn">예금</button>
        <button className="btn">적금</button>
      </section>
    </StyledProductList>
  )
}

const StyledProductList = styled.div`
  margin: auto;
  width: 1320px;
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
`

export default ProductList
