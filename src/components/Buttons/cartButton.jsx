import React from 'react'
import styled from 'styled-components'
import { FaShoppingCart } from 'react-icons/fa'

const ApplyButton = () => {
  return (
    <StyledBotton>
      <div className='cart-button-container'>
        <p>장바구니에 담기</p>
        <button className="btn btn_cart">
            <FaShoppingCart size="32" />
        </button>
      </div>
    </StyledBotton>
  )
}

export default ApplyButton

const StyledBotton = styled.div`
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