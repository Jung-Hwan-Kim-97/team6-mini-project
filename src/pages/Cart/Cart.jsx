import React, {useState, useEffect} from 'react'
import PageIntroduction from '../../components/PageIntroduction'
import Card from '../../components/Cart/Card'
import { useCart, addItem, deleteItem } from '../../stores/reducers/cartSlice';

const Cart = () => {
  
  const { cartList } = useCart();

  return (
    <div className="cart-container">
      <PageIntroduction pagename="장바구니"/>
      {
        cartList.map( (product, index) =>{
          return (<Card key={index}
            product = {product}
          />)
        })
      } 
    </div>
  )
}

export default Cart