import { createSlice } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'
import data from '../data/data.json'
//nanoid
import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'
const productSlice = createSlice({
  name: 'productSlice',
  initialState: {
    isVisible: false,
    onModal: false,
    productList: data.result.baseList.map(i => {
      return { ...i, id: nanoid() }
    }),
    purchasedList: [],
    purchaseItem: {},
  },
  reducers: {
    modalHandler(state, action) {
      state.onModal = !state.onModal
    },
    isVisibleHandler(state, action) {
      state.isVisible = !state.isVisible
    },
    purchaseRequest(state, action) {
      state.purchaseItem = action.payload
    },
    purchaseConfirmation(state, action) {
      state.purchasedList = state.purchasedList.concat(state.purchaseItem)
    },
  },
})

export const useProduct = () => {
  const dispatch = useDispatch()
  const onModal = useSelector(state => state.product.onModal)
  const productList = useSelector(state => state.product.productList)
  const purchasedList = useSelector(state => state.product.purchasedList)
  const purchaseItem = useSelector(state => state.product.purchaseItem)
  const isVisible = useSelector(state => state.product.isVisible)
  return {
    dispatch,
    onModal,
    productList,
    purchasedList,
    purchaseItem,
    isVisible,
  }
}

export const {
  modalHandler,
  purchaseRequest,
  purchaseConfirmation,
  isVisibleHandler,
} = productSlice.actions

export default productSlice.reducer
