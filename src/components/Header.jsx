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
  display: flex;
  background-color: ${({ theme }) => theme.palette.cobaltBlue};
  height: 70px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  .logo {
    margin-left: 40px;
    &:hover {
      cursor: pointer;
      background-color: rgba(0, 0, 0, 0.3);
    }
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
      background-color: transparent;
      border: none;
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
