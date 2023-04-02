import { createSlice } from '@reduxjs/toolkit'

const categoriesState = []

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: categoriesState,
  reducers: {
    checkStatus(state) {
      state = "Under construction"
    },
  },
})

export const { checkStatus } = categoriesSlice.actions

export default categoriesSlice.reducer