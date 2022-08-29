import { createSlice } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'
import data from '../data/data.json'
//nanoid
import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'

const productSlice = createSlice({
  name: 'productSlice',
  initialState: {
    onModal: false,
    productList: data.result.baseList.map(i => {
      return { ...i, id: nanoid() }
    }),
  },
  reducers: {
    modalHandler(state, action) {
      state.onModal = !state.onModal
    },
  },
})

export const useProduct = () => {
  const dispatch = useDispatch()
  const onModal = useSelector(state => state.product.onModal)
  const productList = useSelector(state => state.product.productList)
  return { dispatch, onModal, productList }
}

export const { modalHandler } = productSlice.actions

export default productSlice.reducer
