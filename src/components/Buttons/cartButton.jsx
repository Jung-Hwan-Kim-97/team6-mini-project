import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { BsCart3 } from 'react-icons/bs'

const CartButton = (props) => {
  const navigate = useNavigate()
  console.log(props, "여기")

  const navigateCart = props =>{
    props.onAddCart
    navigate('/cart')
  }
  return (
    <StyledButton>
      <div className='cart-button-container'>
        <button className="btn btn_cart"
        onClick={navigateCart} >
          <BsCart3 size="30" color="#2D71C4" />
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