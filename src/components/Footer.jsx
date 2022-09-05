import React from 'react'
import styled from 'styled-components'
import theme from '../assets/theme'

const Footer = () => {
  const prevent = e => {
    e.preventDefault()
  }

  return (
    <StyledFooter>
      <div className="etc-info">
        <div className="left-etc">
          <ul className="left-etc-item1">
            <li>
              <a href="#" onClick={prevent}>
                개인정보처리방침
              </a>
            </li>
            <li>
              <a href="#" onClick={prevent}>
                신용정보활용체제
              </a>
            </li>
            <li>
              <a href="#" onClick={prevent}>
                전자체제
              </a>
            </li>
            <li>
              <a href="#" onClick={prevent}>
                사고신고
              </a>
            </li>
            <li>
              <a href="#" onClick={prevent}>
                보호금융상품등록부
              </a>
            </li>
            <li>
              <a href="#" onClick={prevent}>
                영업점 안내
              </a>
            </li>
          </ul>
          <ul className="left-etc-item2">
            <li>
              <p>고객센터 0000-0000</p>
            </li>
            <li>
              <p> ©team6</p>
            </li>
          </ul>
        </div>
        <div className="right-etc">
          <p>Copyright © Team6 All rights reserved</p>
        </div>
      </div>
    </StyledFooter>
  )
}

const StyledFooter = styled.div`
  /* position: relative; */
  width: 100%;
  bottom: 0;
  height: 60px;
  background-color: ${({ theme }) => theme.palette.cobaltBlue};
  display: flex;

  .etc-info {
    color: #fff;
    position: relative;
    width: 100%;
    li {
      margin-right: 12px;
      font-size: 12px;
      a {
        text-decoration: none;
        color: #fff;
      }
    }
    .left-etc {
      display: flex;
      flex-direction: column;
      margin: 12px;
      align-content: space-between;

      .left-etc-item1 {
        display: flex;
        margin-bottom: 12px;
        li {
          &:hover {
            background-color: rgba(0, 0, 0, 0.3);
          }
        }
      }
      .left-etc-item2 {
        display: flex;
      }
    }
    .right-etc {
      position: absolute;
      bottom: 10px;
      right: 50px;
    }
  }
`

export default Footer
