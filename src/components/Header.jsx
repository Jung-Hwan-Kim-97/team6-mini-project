import React, { useState } from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'
import { BiSearchAlt } from 'react-icons/bi'

const Header = () => {
  const isLogin = useState(false)

  return (
    <StyledHeader>
      <div className="logo">
        <img src={logo} alt="logo-image" />
      </div>
      <div className="search-bar">
        <input type="text" />
        <span className="search-icon">
          <BiSearchAlt size="22" />
        </span>
      </div>
      <div className="actions">
        <button className="btn">로그인</button>
        <button className="btn">회원가입</button>
      </div>
    </StyledHeader>
  )
}

const StyledHeader = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.palette.cobaltBlue};
  height: 70px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  .logo {
    margin-left: 40px;
    img {
      height: 64px;
    }
  }
  .search-bar {
    position: relative;
    display: flex;
    flex-grow: 1;
    input {
      flex-grow: 1;
      margin: 0 10px;
      outline: none;
      border-radius: 8px;
      border: 1px solid;
      box-sizing: border-box;
      padding: 2px 0;
    }
    .search-icon {
      position: absolute;
      right: 13px;
      &:hover {
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.3);
      }
    }
  }
  .actions {
    margin-right: 40px;
    .btn {
      color: #fff;
      outline: none;
      border: none;
      background-color: transparent;

      font-size: 20px;
      &:first-child {
        margin-right: 10px;
      }
    }
  }
`

export default Header
