import { createSlice } from '@reduxjs/toolkit'

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