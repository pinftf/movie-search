import { useState, useEffect } from 'react'
import { useOMDBApi } from './useOMDBApi'

const useMovieDetails = (movieId) => {
  const [movie, setMovie] = useState(null)
  const { fetchMoviebyId } = useOMDBApi()

  useEffect(() => {
    if (movieId) {
      fetchMoviebyId(movieId).then(setMovie)
    }
  }, [movieId, fetchMoviebyId])
  return movie
}

export default useMovieDetails
