import React from 'react'
import { createRandomMovie } from '../data/Data'
import { useDispatch, useSelector } from 'react-redux'
import { addMovie, removeMovie } from '../Redux/Slice/MoviesSlice'

const MoviesPlayList = () => {
  const dispatch = useDispatch()
  const moviePlaylist = useSelector((state) => {
    return state.movies
  })

  const handleMovieAdd = (movie) => {
    dispatch(addMovie(movie))
  }

  const handleMovieRemove = (movie) => {
    dispatch(removeMovie(movie))
  }

  const renderMovies = moviePlaylist.map((movie, index) => {
    return (
      <li key={index}>
        {movie}
        <button onClick={() => handleMovieRemove(movie)}>Remove Movie</button>
      </li>
    )
  })

  return (
    <div>
      <div>
        <button
          onClick={() => {
            handleMovieAdd(createRandomMovie())
          }}
        >
          Add Movie
        </button>
      </div>
      <ul>{renderMovies}</ul>
    </div>
  )
}

export default MoviesPlayList
