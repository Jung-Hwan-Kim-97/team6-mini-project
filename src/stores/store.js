import { configureStore } from '@reduxjs/toolkit'
import testSlice from './testSlice'
import product from './productSlice'
import cartList from './reducers/cartSlice';
import MyServiceList from './reducers/MyServiceSlice';
const store = configureStore({
  reducer: {
    test: testSlice,
    product,
    cartList: cartList.reducer,
    MyServiceList: MyServiceList.reducer
  },
})

export default store
