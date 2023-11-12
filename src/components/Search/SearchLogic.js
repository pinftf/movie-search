import React from 'react'
import SearchInput from './SearchInput'
import MovieCard from '../MovieCard/MovieCard'

import { useOMDBApi } from '../useOMDBApi'

const SearchLogic = () => {
  const { searchValue, handleSearchInputValues, callSearchFunction, movies } =
    useOMDBApi()

  return (
    <div>
      <SearchInput
        searchValue={searchValue}
        handleSearchInputValues={handleSearchInputValues}
        callSearchFunction={callSearchFunction}
      />

      <div className="movie-list">
        {movies && movies.length > 0 ? (
          movies.map((movie, index) => <MovieCard key={index} movie={movie} />)
        ) : (
          <div>No movies found </div>
        )}
      </div>
    </div>
  )
}

export default SearchLogic
