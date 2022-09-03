import React, { useState } from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'
import { BiSearchAlt } from 'react-icons/bi'
import { useProduct, searchedProduct } from '../stores/productSlice'
import { useNavigate } from 'react-router-dom'
const Header = () => {
  const isLogin = useState(false)
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
      <form className="search-bar" onSubmit={formHandler}>
        <input
          type="text"
          onChange={getBankNameHandler}
          value={bankName}
          placeholder="조회하실 은행을 입력 해 주세요"
        />
        <button className="search-icon">
          <BiSearchAlt size="18" />
        </button>
      </form>
      <div className="actions">
        <button
          className="btn"
          onClick={() => {
            navigate('/logIn')
          }}
        >
          로그인
        </button>
        <button
          className="btn"
          onClick={() => {
            navigate('/signUp')
          }}
        >
          회원가입
        </button>
      </div>
    </StyledHeader>
  )
}

const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.palette.cobaltBlue};
  width: 100%;
  justify-content: space-between;
  .container {
    min-width: 250px;
    max-width: 1100px;
    height: 100%;
    display: flex;
    margin: 0 auto;
    padding: 0 20px;
    .logo {
      align-items: center;
      img {
        height: 64px;
        cursor: pointer;
        &:hover {
          background-color: rgba(0, 0, 0, 0.3);
          border-radius: 3em;
        }
      }
    }
    .search-bar {
      position: relative;
      display: flex;
      width: calc(100% - 200px);
      height: 30px;
      align-self: center;
      justify-self: center;
      flex-grow: 1;
      input {
        flex-grow: 1;
        margin: 0 12px;
        outline: none;
        border-radius: 8px;
        border: 1px solid;
        box-sizing: border-box;
        padding: 6px 8px;
        overflow: hidden;
        white-space: nowrap;
      }
      .search-icon {
        position: absolute;
        top: 2px;
        right: 12px;
        background-color: transparent;
        color: ${({ theme }) => theme.palette.fontColor};
        border: none;
        &:hover {
          cursor: pointer;
          color: ${({ theme }) => theme.palette.cobaltBlue};
        }
      }
    }
    .actions {
      display: flex;
      align-self: center;
      .btn {
        color: #fff;
        padding: 10px 6px;
        outline: none;
        border: none;
        background-color: transparent;
        font-size: 1.2em;
        cursor: pointer;
        white-space: nowrap;
        &:hover {
          background-color: rgba(0, 0, 0, 0.3);
      } &:first-child {
        margin-right: 10px;
      }
    }
  }
`

export default Header
