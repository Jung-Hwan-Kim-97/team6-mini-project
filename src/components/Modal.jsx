import React, { useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import { useProduct, modalHandler } from '../stores/productSlice'

const Modal = () => {
  const { dispatch, onModal } = useProduct()

  const purchasemode = () => {
    dispatch(modalHandler())
    alert('신청이 완료되었습니다!')
  }
  const cancelMode = () => dispatch(modalHandler())

  return (
    <StyledModal test={onModal}>
      <div className="content">
        <p className="title">정말 신청하시겠습니까?</p>
        <div className="actions">
          <button className="btn" onClick={purchasemode}>
            확인
          </button>
          <button className="btn" onClick={cancelMode}>
            취소
          </button>
        </div>
      </div>
    </StyledModal>
  )
}

const fadeInModal = keyframes`
  from{
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
const fadeOutModal = keyframes`
  from{
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

const StyledModal = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  margin: 0;
  .content {
    width: ${({ theme }) => theme.size.modalWidth}px;
    height: ${({ theme }) => theme.size.modalWidth / 3}px;
    background-color: #f5f5dc;
    border-radius: 8px 8px 0 0;
    box-sizing: border-box;
    position: relative;
    animation-name: ${({ test }) => {
      if (test) {
        return fadeInModal
      } else if (!test) {
        return fadeOutModal
      }
    }};
    animation-duration: 0.7s;
    animation-timing-function: ease-out;
    .title {
      font-size: 20px;
      font-weight: 700;
      position: absolute;
      text-align: center;
      left: 30%;
      top: 40%;
      color: #ffa09a;
    }
    .actions {
      width: 100%;
      border-top: 1px solid #808080;
      position: absolute;
      bottom: 0;
      padding: 3px;
      box-sizing: border-box;
      display: flex;
      justify-content: flex-end;
      .btn {
        margin: 0 5px;
        outline: none;
        padding: 0 20px;
        border-radius: 8px;
        border: none;
        background-color: #ddddff;
        box-sizing: border-box;
        color: #fff;
        &:nth-child(2) {
          background-color: #f0ccbf;
        }

        &:hover {
          background-color: rgba(0, 0, 0, 0.5);
        }
      }
    }
  }
`

export default Modal
