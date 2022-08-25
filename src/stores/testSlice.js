import { createSlice } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
const testSlice = createSlice({
  name: 'testSlice',
  initialState: {
    number: 0,
  },
  reducers: {
    increase(state, action) {
      state.number += 1
    },
    decrease(state, action) {
      state.number -= 1
    },
  },
})

export const useTest = () => {
  const dispatch = useDispatch()
  const number = useSelector(state => state.test.number)

  return { number, dispatch }
}

export const { increase, decrease } = testSlice.actions

export default testSlice.reducer
