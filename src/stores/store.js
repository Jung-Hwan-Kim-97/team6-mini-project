import { configureStore } from '@reduxjs/toolkit'
import testSlice from './testSlice'
import product from './productSlice'
import userSlice from './user/userSlice'
import favoriteSlice from './favoriteSlice'

import cartList from './reducers/cartSlice';
import MyServiceList from './reducers/MyServiceSlice';
const store = configureStore({
  reducer: {
    test: testSlice,
    product,
    user: userSlice,
    favorite: favoriteSlice,
    cartList: cartList.reducer,
    MyServiceList: MyServiceList.reducer
  },
})

export default store
