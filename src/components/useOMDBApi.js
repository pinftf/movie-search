import { useState } from 'react'

const OMDB_API_KEY = '51ffa113'

function useOMDBApi() {
  const [searchValue, setSearchValue] = useState('')
  const [movies, setMovies] = useState([])

  const handleSearchInputValues = (e) => {
    setSearchValue(e.target.value)
  }

  const callSearchFunction = () => {
    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=${OMDB_API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.Search) {
          setMovies(data.Search)
        } else {
          setMovies([])
        }
      })
      .catch((error) => {
        console.error('Error fetching movie data', error)
        setMovies([])
      })
  }

  return {
    searchValue,
    handleSearchInputValues,
    callSearchFunction,
    movies
  }
}

export { useOMDBApi }
