import { configureStore } from '@reduxjs/toolkit'
import testSlice from './testSlice'
import product from './productSlice'
import userReducer from './user/userSlice'
const store = configureStore({
  reducer: {
    test: testSlice,
    product,
    user: userReducer,
  },
})

export default store
