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
import { nanoid } from 'nanoid'

const buttonList = [
  { name: '계좌 조회', icon: RiMoneyDollarBoxFill, id: nanoid() },
  { name: '빠른 조회', icon: TbZoomMoney, id: nanoid() },
  { name: '예금', icon: BsPiggyBankFill, id: nanoid() },
  { name: '적금', icon: RiMoneyDollarCircleFill, id: nanoid() },
  { name: '소비자 보호', icon: SiAdguard, id: nanoid() },
  { name: '상담/예약', icon: RiCustomerService2Fill, id: nanoid() },
]

function HomeNav() {
  const navHandler = e => {
    const value = e.currentTarget.getAttribute('name')
    alert(`${value} 서비스는 추가 예정입니다! 😭`)
  }

  return (
    <StyledHomeNav>
      <p>주요 서비스</p>
      <hr />
      <div className="icons">
        {buttonList.map(item => {
          return (
            <div
              className="icon"
              key={item.id}
              name={item.name}
              onClick={navHandler}
            >
              <item.icon className="icon" size="35" />
              {item.name}
            </div>
          )
        })}
      </div>
    </StyledHomeNav>
  )
}

export default HomeNav

const StyledHomeNav = styled.div`
  background: #2d71c3;
  color: #fff;
  margin: 20px 0 50px;
  padding: 10px;
  flex-grow: 1;
  box-shadow: 1px 1px 5px gray;

  .icons {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .icon {
    padding: 8px;
    font-size: 14px;
  }
  .icon:hover {
    color: #00064d;
    transition: all 0.5s;
    cursor: pointer;
  }

  p {
    font-weight: 900;
    font-size: 18px;
    margin: 15px;
  }

  div {
    display: flex;
    margin: 0 5px;
    align-items: center;
  }
`
