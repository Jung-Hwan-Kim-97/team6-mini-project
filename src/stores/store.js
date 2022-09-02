import { configureStore } from '@reduxjs/toolkit'
import testSlice from './testSlice'
import product from './productSlice'
import userSlice from './user/userSlice'
import favoriteSlice from './favoriteSlice'

const store = configureStore({
  reducer: {
    test: testSlice,
    product,
    user: userSlice,
    favorite: favoriteSlice,
  },
})

export default store
