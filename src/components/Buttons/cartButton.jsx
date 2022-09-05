import React from 'react'
import styled from 'styled-components'
import { FaShoppingCart } from 'react-icons/fa'
import {
  useCart,
  addCartItem,
  deleteCartItem,
} from '../../stores/reducers/cartSlice'

const CartButton = ({ item }) => {
  const { cartList, dispatch } = useCart()
  const onCartIcon = cartList.some(element => element.id === item.id)

  return (
    <StyledBotton>
      {onCartIcon ? (
        <FaShoppingCart
          size="30"
          color="#FF9933"
          onClick={() => {
            dispatch(deleteCartItem(item))
          }}
        />
      ) : (
        <FaShoppingCart
          size="30"
          color="#2D71C4"
          onClick={() => {
            dispatch(addCartItem(item))
          }}
        />
      )}
    </StyledBotton>
  )
}

const StyledBotton = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
`

export default CartButton
