import { configureStore } from '@reduxjs/toolkit'
import testSlice from './testSlice'
import product from './productSlice'
import cartReducer from './reducers/cart'
const store = configureStore({
  reducer: {
    test: testSlice,
    product, cartReducer
  },
})

export default store
