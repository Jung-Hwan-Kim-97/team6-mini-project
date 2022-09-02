import React from 'react'
import styled from 'styled-components'
import { FaClipboardCheck } from 'react-icons/fa'

const ApplyButton = () => {
  return (
    <StyledBotton>
      <div className='apply-button-container'>
        <p>신청하기</p>
        <button className="btn btn_apply">
            <FaClipboardCheck size="26" />
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
    color: ${({ theme }) => theme.palette.cobaltBlue};
    cursor: pointer;
  }
  .btn_apply {
    background-color: transparent;
    padding: 6px;
  }
`