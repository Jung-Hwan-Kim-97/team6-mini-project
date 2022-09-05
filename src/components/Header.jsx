import React, { useState } from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'
import { BiSearchAlt } from 'react-icons/bi'
import { useProduct, searchedProduct } from '../stores/productSlice'
import { useNavigate, Link } from 'react-router-dom'
import { logOut } from '../stores/user/userSlice'

const Header = () => {
  const isLogin = !!localStorage.getItem('userInfo')
  const [bankName, setBankName] = useState('')

  const navigate = useNavigate()
  const { dispatch, searchedItemList } = useProduct()

  const getBankNameHandler = e => {
    setBankName(e.target.value)
  }

  const formHandler = e => {
    e.preventDefault()
    dispatch(searchedProduct({ bankName }))
    navigate('/serchedproduct')
    setBankName('')
  }

  const searchToggle = () => {
    const search = document.querySelector('.search-bar')
    search.classList.toggle('active')
  }
  const handleLogOutClick = () => {
    dispatch(logOut())
    alert('로그아웃 되었습니다!!')
    window.location.href = '/'
  }
  return (
    <StyledHeader>
      <div
        className="logo"
        onClick={() => {
          navigate('/')
        }}
      >
        <img src={logo} alt="logo-image" />
      </div>
      <div className="actions">
        <form className="search-bar" onSubmit={formHandler}>
          <div className="search-icon" onClick={searchToggle}>
            <BiSearchAlt size="18" />
          </div>
          <div className="input">
            <input
              type="text"
              onChange={getBankNameHandler}
              value={bankName}
              placeholder="조회하실 은행을 입력 해 주세요"
            />
          </div>
          <button className="search-button">검색</button>
        </form>
        {isLogin ? (
          <button onClick={handleLogOutClick}>로그아웃</button>
        ) : (
          <>
            <Link to="/logIn">로그인</Link>
            <Link to="/signUp">회원가입</Link>
          </>
        )}
      </div>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  display: flex;
  background-color: ${({ theme }) => theme.palette.cobaltBlue};
  width: 100%;
  justify-content: space-between;
  position: relative;
  .logo {
    margin-left: 40px;
    &:hover {
      cursor: pointer;
    }
    img {
      height: 64px;
    }
  }
  .actions {
    margin-right: 40px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 20px;
    button {
      color: #fff;
      background-color: transparent;
      outline: none;
      border: none;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
    a {
      color: #fff;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .cta {
    right: 105px;
    bottom: 5px;
    position: absolute;
    display: flex;
    gap: 10px;
    button {
      color: #fff;
      background-color: transparent;
      outline: none;
      border: none;
      font-size: 20px;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
    a {
      font-size: 20px;
      color: #fff;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .search-bar {
    margin-right: 10px;
    position: relative;
    width: 30px;
    height: 30px;
    background-color: ${({ theme }) => theme.palette.whiteColor};
    border-radius: 60px;
    transition: 0.5s;
    box-shadow: 0 0 0 5px #2573ef;
    overflow: hidden;
    &.active {
      width: 360px;
    }
    .search-icon {
      position: absolute;
      top: 0;
      left: 0;
      width: 30px;
      height: 30px;
      background: ${({ theme }) => theme.palette.whiteColor};
      border-radius: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
      cursor: pointer;
    }
    .input {
      position: relative;
      width: 280px;
      height: 30px;
      left: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1;
      input {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        font-size: 12px;
        padding: 0;
      }
    }
    .search-button {
      border: none;
      outline: none;
      background-color: ${({ theme }) => theme.palette.whiteColor};
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      font-size: 12px;
      right: 10px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`

export default Header