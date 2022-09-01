import React from 'react'
import styled from 'styled-components'
import { buttonList } from '../data/homeData'

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
