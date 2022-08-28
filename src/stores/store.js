import { configureStore } from '@reduxjs/toolkit'
import testSlice from './testSlice'
import product from './productSlice'
import favoriteSlice from './favoriteSlice'

const store = configureStore({
  reducer: {
    test: testSlice,
    product,
    favorite: favoriteSlice.reducer
  },
})

export default store
