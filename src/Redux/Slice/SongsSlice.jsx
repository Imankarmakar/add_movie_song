import {createSlice} from '@reduxjs/toolkit'

const SongsSlice= createSlice({

    name: 'songs',
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload)
    },
    removeSong(state, action) {
      const index = state.indexOf(action.payload)
      state.splice(index, 1)
    },
},
})

export const { addSong , removeSong} = SongsSlice.actions
export const songReducer = SongsSlice.reducer