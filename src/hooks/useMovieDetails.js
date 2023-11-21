import { useState, useEffect } from 'react'

const OMDB_API_KEY = '51ffa113'

const useMovieDetails = (movieId) => {
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchMovieById = async () => {
      setLoading(true)
      setError(null)
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
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    if (movieId) {
      fetchMovieById()
    }
  }, [movieId])

  return { movie, loading, error }
}

export default useMovieDetails
