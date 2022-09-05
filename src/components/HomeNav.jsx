import React, { useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { buttonList } from '../data/homeData'

function HomeNav() {
  const navigate = useNavigate()
  const navHandler = useCallback(
    e => {
      const nameValue = e.currentTarget.getAttribute('name')
      const urlValue = e.currentTarget.getAttribute('url')

      if (urlValue === 'null') {
        alert(`${nameValue} 서비스는 추가 예정입니다! 😭`)
        return
      } else {
        navigate(urlValue)
      }
    },
    [navigate],
  )

  useEffect(() => {}, [navigate])

  return (
    <StyledHomeNav>
      <p>주요 서비스</p>
      <hr />
      <div className="icons">
        {buttonList.map(list => {
          return (
            <div
              className="icon"
              name={list.name}
              key={list.id}
              url={list.path}
              onClick={navHandler}
            >
              <list.icon className="icon" size="35" />
              {list.name}
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
