import React from 'react'
import styled from 'styled-components'
import { BsXLg } from "react-icons/bs";
import { deleteItem, useCart } from '../../stores/reducers/cartSlice'
import { useNavigate } from 'react-router-dom'

const CloseButton = (props) => {
  const { navigate } = useNavigate();
  const { dispatch } = useCart();

  return (
    <StyledBotton>
      <div className='close-button-container'>
        <p>삭제하기</p>
          <BsXLg className="btn btn_close" onClick={()=> dispatch(deleteItem(props.item))} size="28" />
      </div>
    </StyledBotton>
  )
}

export default CloseButton

const StyledBotton = styled.div`
  p {
    display: none;
  }
  .btn {
    background-color: transparent;
    outline: none;
    border: none;
    padding: 0;
    color: ${({ theme }) => theme.palette.lightGray};
    cursor: pointer;
  }
`