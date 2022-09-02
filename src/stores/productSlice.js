import { createSlice } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'
import data from '../data/data.json'
//nanoid
import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'
import dayjs from 'dayjs'
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
    searchedItemList: [],
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
      state.purchasedList = state.purchasedList.concat({
        ...state.purchaseItem,
        purchaseTime: dayjs().format('YY년 MM월 DD일 HH시 mm분'),
      })
      localStorage.setItem('product', JSON.stringify(state.purchasedList))
    },
    removePurchaseItem(state, action) {
      state.purchasedList = state.purchasedList.filter(
        item => item.id !== action.payload.id,
      )
      localStorage.setItem('product', JSON.stringify(state.purchasedList))
    },
    searchedProduct(state, action) {
      state.searchedItemList = state.productList.filter(item => {
        return item.kor_co_nm === action.payload.bankName
      })
    },
  },
})

export const useProduct = () => {
  const dispatch = useDispatch()
  const onModal = useSelector(state => state.product.onModal)
  const isVisible = useSelector(state => state.product.isVisible)
  const productList = useSelector(state => state.product.productList)
  const purchasedList = useSelector(state => state.product.purchasedList)
  const purchaseItem = useSelector(state => state.product.purchaseItem)
  const searchedItemList = useSelector(state => state.product.searchedItemList)

  return {
    dispatch,
    onModal,
    isVisible,
    productList,
    searchedItemList,
    purchasedList,
    purchaseItem,
  }
}

export const {
  modalHandler,
  isVisibleHandler,
  purchaseRequest,
  purchaseConfirmation,
  removePurchaseItem,
  searchedProduct,
} = productSlice.actions

export default productSlice.reducer
