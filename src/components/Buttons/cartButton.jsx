import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { BsCart3 } from 'react-icons/bs'
import { addItem } from '../../stores/reducers/cartSlice'
import { useCart } from '../../stores/reducers/cartSlice'

const CartButton = (props) => {

  const { dispatch } = useCart();
  const navigate = useNavigate();
  return (
    <StyledButton>
      <div className='cart-button-container'>
        <button className="btn btn_cart" >
          <BsCart3 size="30" color="#2D71C4" onClick={() => {
            dispatch(addItem(props.item))
            navigate('/cart')}}/>
        </button>
      </div>
    </StyledButton>
  )
}

export default CartButton

const StyledButton = styled.div`
  p {
    text-indent: -9999px;
  }
  .btn {
    outline: none;
    border: none;
    color: ${({ theme }) => theme.palette.skyBlue};
    cursor: pointer;
    background-color: transparent;
    padding: 0;
  }
`