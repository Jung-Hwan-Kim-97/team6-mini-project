import React, { useState, useEffect } from 'react'
import PageIntroduction from '../../components/PageIntroduction'
import Card from '../../components/Cart/Card'
import { useProduct } from '../../stores/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCartItem } from '../../stores/reducers/cartSlice'
import { applyItem } from '../../stores/reducers/MyServiceSlice'
import { addFavorite } from '../../stores/favoriteSlice'
import { useCart } from '../../stores/reducers/cartSlice'
import styled from 'styled-components'

function Cart() {
  const { dispatch, cartList } = useCart()

  const getCartList = JSON.parse(localStorage.getItem('cart'))
  console.log(getCartList)

  return (
    <StyledCart>
      <PageIntroduction pagename="장바구니" />
      {getCartList.length > 0 ? (
        getCartList.map(product => {
          return (
            <Card
              key={product.id}
              bankName={product.kor_co_nm}
              productName={product.fin_prdt_nm}
              productDescription={product.mtrt_int}
              savingsLimit={product.max_limit}
              product={product}
              // onBookMarkClick={} 북마크 리덕스로 state 구현 완료시 넣기
              onDeleteClick={() => {
                dispatch(deleteCartItem(product))
              }}
              onApplyClick={() => {
                dispatch(applyItem(item[index].id))
              }}
            />
          )
        })
      ) : (
        <p className="null-text">장바구니를 추가 해 주세요!</p>
      )}
    </StyledCart>
  )
}

const StyledCart = styled.div`
  border: 1px solid red;
  height: 80vh;
  .null-text {
    position: absolute;
    font-size: 30px;
    top: 50%;
    left: 40%;
    color: #808080;
    font-weight: 700;
  }
`

export default Cart
