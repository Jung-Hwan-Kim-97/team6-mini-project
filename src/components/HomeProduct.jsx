import React, { useState, useEffect, useCallback, Fragment } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { getRandomInt } from '../data/homeData'

function HomeProduct({ dataList }) {
  const navigate = useNavigate()
  const [dataLists, setDataList] = useState([])

  useEffect(() => {
    const randomNum = getRandomInt(0, 90)
    setDataList(dataList.slice(randomNum, randomNum + 3))
  }, [])

  const productHandler = useCallback(
    ({ state: list }) => {
      navigate(`/productlist/${list.id}`, { state: list })
    },
    [navigate],
  )

  return dataLists.map(list => (
    <StyledHomeProduct key={list.id}>
      <div>
        <p>[{list.kor_co_nm}]</p>
        <p>{list.fin_prdt_nm}</p>
        <p>
          {list.mtrt_int.split('\n').map((str, index) => (
            <Fragment key={index}>
              {str}
              <br />
            </Fragment>
          ))}
        </p>
        <p>신청 대상자</p>
        <p>{list.join_member}</p>
        <button onClick={() => productHandler({ state: list })}>자세히</button>
      </div>
    </StyledHomeProduct>
  ))
}
export default HomeProduct

const StyledHomeProduct = styled.div`
  box-sizing: border-box;
  box-shadow: 1px 1px 6px #d6d6d6;
  padding: 10px 5px;
  border-radius: 0.5rem;
  background-color: #d3e4ff;
  margin: 15px 7px 35px;
  & div {
    align-items: center;
    justify-content: center;
    display: flex;
    width: 310px;
    height: 450px;
    flex-direction: column;
    p {
      margin: 10px 15px 3px;
      flex-grow: 1;
      color: #747d94;
      word-break: keep-all;
    }
    p:nth-child(1) {
      margin-bottom: 5px;
      font-size: 16px;
      font-weight: 600;
      color: #373737;
    }
    p:nth-child(2) {
      text-align: center;
      font-size: 20px;
      font-weight: 800;
      margin: 10px 5px 10px;
      color: #2d71c3;
    }
    p:nth-child(3) {
      line-height: 1.5rem;
      font-size: 14px;
      text-align: center;
      color: #373737;
      padding: 5px;
      border-top: 1px solid #2d71c3;
      border-bottom: 1px solid #2d71c3;
      background-color: #e9effe;
      margin-bottom: 15px;
    }
    p:nth-child(4) {
      margin-top: 10px;
      border-bottom: #ccc solid 1px;
      font-size: 16px;
    }
    p:nth-child(5) {
      text-align: center;
      font-size: 13px;
      line-height: 1.2rem;
      color: #747d94;
    }
    p:nth-child(6) {
      text-align: center;
      font-size: 14px;
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
  }
`
