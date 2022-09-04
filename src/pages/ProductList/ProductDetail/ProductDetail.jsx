import React from 'react'
//은행로고
import kbLogo from '~/assets/KB-logo.png'
import wbLogo from '~/assets/WB-logo.jpg'
import sbLogo from '~/assets/SB-logo.png'
import baseLogo from '~/assets/logo2.png'
//react 관련 데이터
import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import ProductNotice from './ProductNotice'
import {
  modalHandler,
  useProduct,
  purchaseRequest,
  isVisibleHandler,
} from '~/stores/productSlice'
import FavoriteButton from '../../../components/FavoriteButton'
import CartButton from '../../../components/Buttons/CartButton'
import { deleteItem } from '../../../stores/reducers/cartSlice'
import PageIntroduction from '../../../components/PageIntroduction'
const ProductDetail = () => {
  const { state } = useLocation()
  const navigate = useNavigate()
  const { dispatch, purchasedList, purchaseItem } = useProduct()

  const purchaseRequestHandler = state => {
    if (purchasedList.some(purchasedItem => purchasedItem.id === state.id)) {
      alert('이미 구매한 상품입니다.')
    } else {
      dispatch(purchaseRequest(state))
      dispatch(isVisibleHandler())
      dispatch(modalHandler())
    }
  }

  const imageSeletor = () => {
    switch (state.kor_co_nm) {
      case '우리은행':
        return wbLogo
      case '신한은행':
        return sbLogo
      case '국민은행':
        return kbLogo
      default:
        return baseLogo
    }
  }

  return (
    <StyledProductDetail>
      <PageIntroduction pagename="상세정보" />

      <section className="product-info">
        <div className="product-icons">
          <FavoriteButton item={state} />
          <CartButton item= {state}/>
        </div>
        <div className="detail-info">
          <ul>
            <li>은행명: {state.kor_co_nm}</li>
            <li>상품명: {state.fin_prdt_nm}</li>
            <li>
              저축한도:
              {state.max_limit === null
                ? '한도 없음'
                : `${state.max_limit}원`}
            </li>
            <li>가입대상: {state.join_member}</li>
            <li>가입경로: {state.join_way}</li>
            <li>가입기간: {state.etc_note}</li>
            <li>
              상세 설명: {state.mtrt_int}
              <p>{state.spcl_cnd}</p>
            </li>
          </ul>
        </div>
        <div className="infoImg">
          <img src={imageSeletor()} alt="국민은행" />
        </div>
      </section>
      <section className="actions">
        <button
          className="btn btn_gray"
          onClick={() => {
            navigate('/productlist')
          }}
        >
          목록
        </button>
        <button
          className="btn"
          onClick={() => {
            purchaseRequestHandler()
          }}
        >
          신청하기
        </button>
      </section>
      <section className="test">
        <ProductNotice />
      </section>
    </StyledProductDetail>
  )
}
const StyledProductDetail = styled.div`
  margin: auto;
  min-width: 350px;
  max-width: 900px;
  .product-info {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 50px 30px 1fr;
    column-gap: 20px;
    background-color: ${({ theme }) => theme.palette.lightBlue};
    border: 1px solid ${({ theme }) => theme.palette.cobaltBlue};
    color: ${({ theme }) => theme.palette.fontColor};
    border-radius: 0.8em;
    box-sizing: border-box;
    padding: 16px 20px;

    .product-icons {
      display: grid;
      height: 36px;
      grid-template-columns: repeat(2, 1fr);
      justify-self: end;
      box-sizing: border-box;
      grid-column: 2 / 3;
    }
    .detail-info {
      grid-row: 1 / 4;
      justify-content: space-between;      
      ul {
        li {
          line-height: 1.6;
        }
      } 
    }
    .infoImg {
      grid-column: 2 / 3;
      grid-row: 2 / 3;
      max-width: calc(100% / 2);
      min-width: 150px;
      margin: 0 auto;
      img {
        display: block;
        width: 100%;
      }
    }
  }
  .actions {
    text-align: center;
    margin-top: 20px;
    .btn {
      margin-left: 20px;
      width: 160px;
      padding: 12px 0;
      outline: none;
      border: none;
      box-sizing: border-box;
      border-radius: 0.8em;
      background-color: ${({ theme }) => theme.palette.cobaltBlue};
      color: #fff;
    }
    .btn_gray {
      background-color: #808080;
    }
  }
`

export default ProductDetail
