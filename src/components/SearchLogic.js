import React from 'react'
import SearchInput from './SearchInput'
import PropTypes from 'prop-types'
import { useOMDBApi } from './useOMDBApi'

const SearchLogic = () => {
  const {
    searchValue,
    handleSearchInputValues,
    callSearchFunction,
    movieData
  } = useOMDBApi()

  return (
    <div>
      <SearchInput
        searchValue={searchValue}
        handleSearchInputValues={handleSearchInputValues}
        callSearchFunction={callSearchFunction}
      />

      {movieData && (
        <div>
          <h2>{movieData.Title}</h2>
          <img src={movieData.Poster} alt={movieData.Title} />
          <p>({movieData.Year})</p>
        </div>
      )}
    </div>
  )
}
SearchLogic.propTypes = {
  search: PropTypes.func.isRequired
}
export default SearchLogic
