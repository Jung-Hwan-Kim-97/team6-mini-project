import React from 'react'
import styled from 'styled-components'
import { BsXLg } from "react-icons/bs";

const CloseButton = () => {
  return (
    <StyledBotton>
      <div className='close-button-container'>
        <p>삭제하기</p>
        <button className="btn btn_close">
            <BsXLg size="22" />
        </button>
      </div>
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