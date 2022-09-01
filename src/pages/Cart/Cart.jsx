import React, {useEffect} from 'react'
import PageIntroduction from '../../components/PageIntroduction'
import data from '../../data/data.json'
import Card from '../../components/Cart/Card'        
import { useProduct } from '../../stores/productSlice'

function Cart() {
  // stores : productSlice.js -> 데이터
  const { productList } = useProduct()
  // useEffect(() => {
  //   console.log()
  // }, [])

  let cartList = []

  for(let i = 0; i < 3; i++) {

    cartList.push(productList[i])
  }
  
  return (
    <div className="cart-container">
      <PageIntroduction pagename="장바구니"/>
      {
        cartList.map( (product, index) =>{
          return (<Card key={index}
            bankName={product.kor_co_nm}
            productName={product.fin_prdt_nm}
            productDescription={product.mtrt_int}
            savingsLimit={product.max_limit}
          />)
        })
      } 
    </div>
  )

  // return (
  //   <div className="cart-container">
  //     <PageIntroduction pagename="장바구니"/>
  //     <div>
  //       {productList.map( i => { return (<div key={i.id}> 상품명: {i.fin_prdt_nm} / 은행명: {i.kor_co_nm} </div>)})}
  //     </div>
  //   </div>
  // )
}

export default Cart