import { createSlice, nanoid } from '@reduxjs/toolkit'
import data from '../../data/data.json'
import { useDispatch, useSelector } from 'react-redux'

let firstCartList = data.result.baseList.slice(0, 2) //임시

let cartList = createSlice({
  name: 'cartList',
  initialState: {
    cartList: [],
  },
  reducers: {
    addCartItem(state, action) {
      state.cartList = state.cartList.concat(action.payload)
      localStorage.setItem('cart', JSON.stringify(state.cartList))
    },
    deleteCartItem(state, action) {
      state.cartList = state.cartList.filter(item => {
        return item.id !== action.payload.id
      })
      localStorage.setItem('cart', JSON.stringify(state.cartList))
    },
  },
})

export const useCart = () => {
  const dispatch = useDispatch()
  const cartList = useSelector(state => state.cartList.cartList)
  return { dispatch, cartList }
}

export let { addCartItem, deleteCartItem } = cartList.actions

export default cartList
