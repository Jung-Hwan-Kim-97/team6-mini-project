import { configureStore } from '@reduxjs/toolkit'
import testSlice from './testSlice'
import product from './productSlice'
const store = configureStore({
  reducer: {
    test: testSlice,
    product,
  },
})

export default store
