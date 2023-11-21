import { useEffect, useState } from 'react'

const OMDB_API_KEY = '51ffa113'

function useOMDBApi() {
  const [searchValue, setSearchValue] = useState('')
  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState([])

  const handleSearchInputValues = (e) => {
    setSearchValue(e.target.value)
  }

  // Debounced search function
  const callSearchFunction = async () => {
    setLoading(true)
    await fetch(
      `https://www.omdbapi.com/?s=${
        searchValue || 'popular'
      }&apikey=${OMDB_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.Search) {
          return setMovies(data.Search)
        }

        return setMovies([])
      })
      .catch((error) => {
        console.error('Error fetching movie data', error)
        setMovies([])
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if (searchValue.length > 2 || searchValue.length === 0) {
        callSearchFunction()
      }
    }, 300)
    return () => {
      clearTimeout(timeOutId)
    }
  }, [searchValue])

  return {
    searchValue,
    handleSearchInputValues,
    callSearchFunction,
    movies,
    loading
  }
}

export { useOMDBApi }
