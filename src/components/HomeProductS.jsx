import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

function HomeProductS({ data }) {
  const dummyData = data.slice(8, 11)
  const navigate = useNavigate()

  return dummyData.map(item => (
    <StyledHomeProductS key={item.id}>
      <p>[{item.kor_co_nm}]</p>
      <p>{item.fin_prdt_nm}</p>
      <p>
        {String(item.mtrt_int)
          .split(/-/g)
          .toString()
          .slice(0, String(item.mtrt_int).indexOf('%'))}
      </p>
      <p>신청 대상자</p>
      <p>{item.join_member}</p>
      <p>
        최대{' '}
        {String(item.max_limit).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
        원
      </p>
      <button
        onClick={() => {
          navigate(`/productlist/${item.id}`, { state: item })
        }}
      >
        자세히
      </button>
    </StyledHomeProductS>
  ))
}

export default HomeProductS

const StyledHomeProductS = styled.div`
  box-sizing: border-box;
  margin: 15px 7px 35px;
  box-shadow: 1px 1px 6px #d6d6d6;
  padding: 15px 10px;
  width: 310px;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #d6d6d6;
  background-color: #d3e4ff;

  p {
    margin: 10px 25px 5px;
    flex-grow: 1;
    color: #747d94;
  }

  p:nth-child(1) {
    font-size: 16px;
    font-weight: 600;
    color: #373737;
  }
  p:nth-child(2) {
    font-size: 20px;
    font-weight: 800;
    margin: 10px 0 10px;
    color: #2d71c3;
  }

  p:nth-child(3) {
    line-height: 1.6rem;
    font-size: 15px;
    text-align: center;
    color: #373737;
    padding: 15px;
    border-top: 1px solid #2d71c3;
    border-bottom: 1px solid #2d71c3;
    background-color: #e9effe;
    margin-bottom: 18px;
  }

  p:nth-child(5) {
    text-align: center;
    font-size: 13px;
    line-height: 1.2rem;
    color: #747d94;
  }
  p:nth-child(6) {
    text-align: center;
    font-size: 15px;
    color: #747d94;
  }

  button {
    border: 2px solid #89b4dc;
    border-radius: 3px;
    width: 150px;
    text-align: center;
    text-decoration: none;
    padding: 10px;
    margin: 15px;
    background-color: #fff;
    color: #373737;
    box-shadow: 1px 1px 6px #d6d6d6;

    :hover {
      background-color: #2d7bc3;
      color: #fff;
      cursor: pointer;
      transition: all 0.5s;
    }
  }
`
