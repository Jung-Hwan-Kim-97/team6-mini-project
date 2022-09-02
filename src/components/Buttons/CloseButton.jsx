import React from 'react'
import styled from 'styled-components'
import { BsXLg } from "react-icons/bs";
import cartList from '../../stores/reducers/cartSlice';

const CloseButton = (props) => {
  return (
    <StyledBotton>
      <div className='close-button-container'>
        <p>삭제하기</p>
        <button className="btn btn_close" onClick={props.onDeleteClick}>
            <BsXLg size="22" />
        </button>
      </div>
      {console.log(cartList.getInitialState)}
    </StyledBotton>
  )

}

export default CloseButton

const StyledBotton = styled.div`
  background-color: pink;
  p {
    text-indent: -9999px;
  }
  .btn {
    background-color: transparent;
    outline: none;
    border: none;
    color: ${({ theme }) => theme.palette.lightGray};
    cursor: pointer;
  }
  .btn_close{
    padding: 0;
  }
`