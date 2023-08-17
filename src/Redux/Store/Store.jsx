import { configureStore } from '@reduxjs/toolkit'
import { movieReducer} from '../Slice/MoviesSlice'
import { songReducer } from '../Slice/SongsSlice'

const store = configureStore({
  reducer: {
    movies: movieReducer,
    songs : songReducer,
  },
})

export { store }
