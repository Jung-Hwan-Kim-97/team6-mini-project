import { createSlice } from '@reduxjs/toolkit'
import data from '../../data/data.json';

let cartList = createSlice({
  name: 'cartList',
  initialState:[
  ],
  reducers: {

    addItem(state, action) {
      state.push(action.payload)
    },
    deleteItem(state, action) {
      const index = state.findIndex((item) => item.id === action.payload)
      state.splice(index, 1);
    }
  }
})


export let { addItem, deleteItem } = cartList.actions

export default cartList;