import React from 'react'
import styled from 'styled-components'
import { FaClipboardCheck } from 'react-icons/fa'
import { useProduct } from '../../stores/productSlice'
import { purchaseRequest, isVisibleHandler, modalHandler } from '../../stores/productSlice'

const ApplyButton = (props) => {
  const { dispatch, purchasedList } = useProduct()

  const purchaseRequestHandler = item => {
    if (purchasedList.includes(item)) {
      alert('이미 구매하신 상품입니다!')
      return
    }
    dispatch(purchaseRequest(item))
    dispatch(isVisibleHandler())
    dispatch(modalHandler())
  }
  return (
    <StyledBotton>
      <div className='apply-button-container'>
        <p>신청하기</p>
        <button className="btn btn_apply" onClick={() => purchaseRequestHandler(props.item)}>
            <FaClipboardCheck size="32" />
        </button>
      </div>
    </StyledBotton>
  )
}

export default ApplyButton

const StyledBotton = styled.div`
  p {
    display: none;
  }
  .btn {
    background-color: transparent;
    outline: none;
    border: none;
    padding: 0;
    color: ${({ theme }) => theme.palette.cobaltBlue};
    cursor: pointer;
  }
`