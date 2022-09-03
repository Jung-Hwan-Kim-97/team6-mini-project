import { createSlice } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux';

const initialState = {
  cartList: JSON.parse(localStorage.getItem('cart')) || []
};

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {

    addItem: (state, action) => {
      state.cartList = [...state.cartList, action.payload]
      localStorage.setItem('cart', JSON.stringify(state.cartList))
    },

    deleteItem :  (state, action) => {
      state.cartList = state.cartList.filter((element) => element.id !== action.payload.id)
      localStorage.setItem('cart', JSON.stringify(state.cartList))
    }
  }
})

export const useCart = () => {
  const dispatch = useDispatch();
  const cartList = useSelector(state=> {
    return state.cart.cartList
  });
  return { dispatch, cartList }
}
export const { addItem, deleteItem } = cartSlice.actions

export default cartSlice.reducer;