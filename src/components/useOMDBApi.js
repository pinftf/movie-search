import { useState } from 'react'

const OMDB_API_KEY = 'http://www.omdbapi.com/?apikey=[yourkey]&'

function useOMDBApi() {
  const [searchValue, setSearchValue] = useState('')
  const [movieData, setMovieData] = useState(null)

  const handleSearchInputValues = (e) => {
    setSearchValue(e.target.value)
  }

  const callSearchFunction = () => {
    fetch(`https://www.omdbapi.com/?t=${searchValue}&apikey=${OMDB_API_KEY}`)
      .then((responde) => responde.json())
      .then((data) => {
        setMovieData(data)
      })
      .catch((error) => {
        console.error('Error fetching movie data', error)
      })
  }

  return { searchValue, handleSearchInputValues, callSearchFunction, movieData }
}

export { useOMDBApi }
