import { configureStore } from '@reduxjs/toolkit'
import testSlice from './testSlice'
import product from './productSlice'
import cartList from './reducers/cart';
const store = configureStore({
  reducer: {
    test: testSlice,
    product,
    cartList: cartList.reducer
  },
})

export default store
