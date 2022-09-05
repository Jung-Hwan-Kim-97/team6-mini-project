import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { baseURL, STATUS } from '~/utils/constants'

const initialState = {
  profile: undefined,
  error: {
    status: '',
  },
  loading: false,
  isLogin: false,
  userName: '김패캠'
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
  reducers: {},
  extraReducers: builder => {
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.error.status = 'STATUS.SUCCESS'
      state.loading = false
    })
    builder.addCase(login.rejected, (state, { payload }) => {
      state.error.status = 'STATUS.FAILED'
      state.loading = false
    })
    builder.addCase(login.pending, state => {
      state.loading = true
    })
  },
})

export default userSlice.reducer

export const { increase, decrease } = userSlice.actions
