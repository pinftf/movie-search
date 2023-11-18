import { useState, useEffect } from 'react'

const OMDB_API_KEY = '51ffa113'

const useMovieDetails = (movieId) => {
  console.log('Fetching details for movie ID:', movieId)
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    const fetchMovieById = async () => {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?i=${movieId}&apikey=${OMDB_API_KEY}`
        )
        if (!response.ok) {
          throw new Error(`API call failed: ${response.status}`)
        }
        const data = await response.json()
        setMovie(data)
      } catch (error) {
        console.error('Error fetching movie details', error)
      }
    }

    if (movieId) {
      fetchMovieById()
    }
  }, [movieId])

  return movie
}

export default useMovieDetails
