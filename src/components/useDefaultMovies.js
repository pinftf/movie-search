import { useState, useEffect } from 'react'

export const useDefaultMovies = () => {
  const OMDB_API_KEY = '51ffa113'
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchDefaultMovies = async () => {
      const response = await fetch(
        `https://www.omdbapi.com/?s=popular&apikey=${OMDB_API_KEY}`
      )
      const data = await response.json()
      if (data.Search) {
        setMovies(data.Search)
      }
    }
    fetchDefaultMovies()
  }, [])

  return movies
}
