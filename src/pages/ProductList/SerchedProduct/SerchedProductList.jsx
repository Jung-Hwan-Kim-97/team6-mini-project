import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useProduct } from '../../../stores/productSlice'
import SerchedProductItem from './SerchedProductItem/SerchedProductItem'
const SerchedProductList = () => {
  const { searchedItemList } = useProduct()
  const navigate = useNavigate()
  return (
    <StyledSerchedProductList>
      <section className="pageTitle">
        <h1>검색결과 {searchedItemList.length}건</h1>
      </section>

      <section className="actions">
        <button
          onClick={() => {
            navigate('/')
          }}
        >
          홈으로 이동
        </button>
        <button
          onClick={() => {
            navigate('/productlist')
          }}
        >
          상품 보러가기
        </button>
      </section>

      <section className="purchase-list-container">
        {searchedItemList.length > 0 ? (
          searchedItemList.map(item => {
            return <SerchedProductItem key={item.id} item={item} />
          })
        ) : (
          <p className="null-text">검색결과가 존재하지 않습니다!</p>
        )}
      </section>
    </StyledSerchedProductList>
  )
}

const StyledSerchedProductList = styled.div`
  margin: auto;
  width: 1320px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .pageTitle {
    width: 100%;
    margin: 40px 0 30px 0;
    border-bottom: 2px solid #808080;
    box-sizing: border-box;
    h1 {
      font-size: 25px;
      margin-bottom: 20px;
    }
  }
  .actions {
    margin-bottom: 20px;
  }
  .purchase-list-container {
    width: 60%;
    height: 450px;
    border: 1px solid red;
    overflow-y: auto;
    position: relative;
    margin-bottom: 30px;
  }
`

export default SerchedProductList
