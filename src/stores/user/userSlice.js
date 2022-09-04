import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  isLogin: false,
  profile: undefined,
  error: {
    status: '',
  },
  loading: false,
}

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUserInfo(state, { payload }) {
      state.isLogin = true
      state.profile = payload
      localStorage.setItem('userInfo', JSON.stringify(payload))
    },
    logOut(state, { payload }) {
      state.isLogin = false
      localStorage.removeItem('userInfo')
    },
  },
})

export default userSlice.reducer

export const { setUserInfo, logOut } = userSlice.actions
