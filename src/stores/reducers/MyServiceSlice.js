import { createSlice } from '@reduxjs/toolkit'

let MyServiceList = createSlice({
  name: 'MyServiceList',
  initialState:[],
  reducers: {
    applyItem(state, action) {
      state.push(action.payload)
    }
  }
})


export let { applyItem } = MyServiceList.actions

export default MyServiceList;