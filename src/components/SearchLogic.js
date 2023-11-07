import React, { useState } from 'react'
import SearchInput from './SearchInput'
import PropTypes from 'prop-types'

const OMDB_API_KEY = 'http://www.omdbapi.com/?apikey=[yourkey]&'

const SearchLogic = ({ search }) => {
  const [searchValue, setSearchValue] = useState('')
  const [movieData, setMovieData] = useState(null)

  const handleSearchInputValues = (e) => {
    setSearchValue(e.target.value)
  }

  const resetInputField = () => {
    setSearchValue('')
  }

  const callSearchFunction = () => {
    fetch(`https://www.omdbapi.com/?t=${searchValue}&apikey=${OMDB_API_KEY}`)
      .then((response) => responde.json())
      .then((data) => {
        setMovieData(data)
      })
      .catch((error) => {
        console.error('Error fetching movie data', error)
      })
  }

  return (
    <div>
    <SearchInput
    searchValue={searchValue}
    handleSearchInputValues={handleSearchInputValues}
    callSearchFunction={callSearchFunction}
    />
    {movieData && (
      <div>
        <h2>{movieData.Poster}</h2>
        <img src={movieData.Poster} alt={movieData.Title} />
        <p>({movieData.Year})</p>
    )}
    </div>
    </div>
  )
}

SearchLogic.propTypes = {
  search: PropTypes.func.isRequired
}
export default SearchLogic
