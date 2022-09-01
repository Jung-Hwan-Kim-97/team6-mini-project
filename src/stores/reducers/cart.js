/* 액션 타입 */
import { createAction } from "@reduxjs/toolkit";

const addItemCart = createAction('ADD_ITEM_CART')

const deleteItemCart = createAction('DELETE_ITEM_CART')


const initState = {
  cartList : []
}

const cartReducer = createReducer(initState, {

  [addItemCart] : (state, action) => state.cartList + action.payload
  [deleteItemCart]
})