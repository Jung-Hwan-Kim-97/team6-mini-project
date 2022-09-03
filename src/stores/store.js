import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import testSlice from './testSlice'
import product from './productSlice'
import userSlice from './user/userSlice'
import favoriteSlice from './favoriteSlice'
import { createLogger } from 'redux-logger'

const logger = createLogger()

import cartList from './reducers/cartSlice'

const store = configureStore({
  reducer: {
    test: testSlice,
    product,
    user: userSlice,
    favorite: favoriteSlice,
    cart: cartList
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
})

export default store
