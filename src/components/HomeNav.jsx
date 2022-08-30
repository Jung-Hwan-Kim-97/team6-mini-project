import React from 'react'
import styled from 'styled-components'
import {
  RiMoneyDollarBoxFill,
  RiMoneyDollarCircleFill,
  RiCustomerService2Fill,
} from 'react-icons/ri'
import { BsPiggyBankFill } from 'react-icons/bs'
import { TbZoomMoney } from 'react-icons/tb'
import { SiAdguard } from 'react-icons/si'

function HomeNav() {
  return (
    <StyledHomeNav>
      <p>주요 서비스</p>
      <hr />
      <div className="icons">
        <div>
          <RiMoneyDollarBoxFill size="35" />
          <span>계좌 조회</span>
        </div>
        <div>
          <TbZoomMoney size="35" />
          <span>빠른 조회</span>
        </div>
        <div>
          <BsPiggyBankFill size="35" />
          <span>예금</span>
        </div>
        <div>
          <RiMoneyDollarCircleFill size="35" />
          <span>적금</span>
        </div>
        <div>
          <SiAdguard size="35" />
          <span>소비자 보호</span>
        </div>
        <div>
          <RiCustomerService2Fill size="35" />
          <span>상담/예약</span>
        </div>
      </div>
    </StyledHomeNav>
  )
}

export default HomeNav

const StyledHomeNav = styled.div`
  background: #2d71c3;
  color: #fff;
  margin: 40px 0;
  flex-grow: 1;
  box-shadow: 1px 1px 5px gray;
  padding: 20px;

  & .icons {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 15px;
  }
  & .icons div:hover {
    color: #00064d;
    transition: all 0.5s;
    cursor: pointer;
  }

  & p {
    font-weight: 900;
    font-size: 18px;
    margin-bottom: 15px;
  }

  & div {
    display: flex;
    margin: 0 5px;
    align-items: center;
  }
  & span {
    margin: 5px;
    font-size: 16px;
  }
`
