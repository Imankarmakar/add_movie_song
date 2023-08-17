import { createSlice } from '@reduxjs/toolkit'

const movieSlice = createSlice({
  name: 'movies',
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload)
    },
    removeMovie(state, action) {
      const index = state.indexOf(action.payload)
      state.splice(index, 1)
    },
  },
})

export const { addMovie, removeMovie } = movieSlice.actions
export const movieReducer = movieSlice.reducer
