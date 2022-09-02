import React, {useState, useEffect} from 'react'
import PageIntroduction from '../../components/PageIntroduction'
import Card from '../../components/Cart/Card'        
import { useProduct } from '../../stores/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import { deleteItem } from '../../stores/reducers/cartSlice'
import { applyItem } from '../../stores/reducers/MyServiceSlice';

function Cart() {
  // stores : productSlice.js -> 데이터
  const { productList } = useProduct()
  // useEffect(() => {
  //   console.log()
  // }, [])
  const item = useSelector(state => state.cartList)

  console.log(item)
  let dispatch = useDispatch();

  return (
    <div className="cart-container">
      <PageIntroduction pagename="장바구니"/>
      {
        item.map( (product, index) =>{
          return (<Card key={index}
            bankName={product.kor_co_nm}
            productName={product.fin_prdt_nm}
            productDescription={product.mtrt_int}
            savingsLimit={product.max_limit}
            // onBookMarkClick={} 북마크 리덕스로 state 구현 완료시 넣기
            onDeleteClick={()=> {dispatch(deleteItem(item[index].id))}}
            onApplyClick={()=> {dispatch(applyItem(item[index].id))}}
          />)
        })
      } 
    </div>
  )
}

export default Cart