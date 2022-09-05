import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { baseURL, STATUS } from '~/utils/constants'

const initialState = {
  isLogin: false,
  profile: undefined,
  error: {
    status: '',
  },
  loading: false,
}

export const login = createAsyncThunk(
  'login',
  async (formValue, { rejectWithValue }) => {
    try {
      const res = await axios.post('mini.fclmh.ml:8080/auth/login', {
        data: { ...formValue },
      })
    } catch (error) {
      rejectWithValue(error.toJSON())
    }
  },
)
export const signUp = createAsyncThunk(
  'signUp',
  async (formValue, { rejectWithValue }) => {
    try {
      const res = await axios.post('mini.fclmh.ml:8080/auth/signup', {
        data: { ...formValue },
      })
    } catch (error) {
      rejectWithValue(error.toJSON())
    }
  },
)
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
  extraReducers: builder => {
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.error.status = STATUS.SUCCESS
      state.loading = false
    })
    builder.addCase(login.rejected, (state, { payload }) => {
      state.error.status = STATUS.FAILED
      state.loading = false
    })
    builder.addCase(login.pending, state => {
      state.loading = true
    })
  },
})

export default userSlice.reducer

export const { setUserInfo, logOut } = userSlice.actions