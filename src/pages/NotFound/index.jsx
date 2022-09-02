import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import notfound from '../../assets/not-found.png'

function NotFound() {
  const navigate = useNavigate();

  return (
    <StyledNotFound>
      <img src={notfound} alt="notfound-image" className='notfound-image' />
      <button className='btn' onClick={() => {navigate("/")}}>메인페이지로 돌아가기</button>
    </StyledNotFound>
  )
}

export default NotFound

const StyledNotFound = styled.main`
  height: calc(100vh - 130px);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .notfound-image {
    height: 100%;
  }
  .btn {
    outline: none;
    border: 2px solid ${({ theme }) => theme.palette.cobaltBlue};
    background-color: ${({ theme }) => theme.palette.whiteColor};
    padding: 10px;
    border-radius: 20px;
    cursor: pointer;
    position: absolute;
    transform: translate(-32%, 380%);
    box-sizing: border-box;
    &:hover {
      background-color: ${({ theme }) => theme.palette.cobaltBlue};
      color: ${({ theme }) => theme.palette.whiteColor};
      transition: 0.2s;
    }
  }
`