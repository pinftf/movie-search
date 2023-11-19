import React, { useState, useEffect, useCallback } from 'react'
import SearchInput from './SearchInput'
import MovieCard from '../MovieCard/MovieCard'
import { useOMDBApi } from '../useOMDBApi'
import { debounce } from 'lodash'

const SearchLogic = () => {
  const {
    searchValue,
    handleSearchInputValues,
    callSearchFunction,
    movies,
    loading
  } = useOMDBApi()
  const [searchPerfomed, setSearchPerformed] = useState(false)
  const debouncedSearch = useCallback(
    debounce(() => {
      if (searchValue.trim()) {
        callSearchFunction()
        setSearchPerformed(true)
      }
    }, 300),
    [searchValue, callSearchFunction]
  )

  useEffect(() => {
    debouncedSearch()
    return () => debouncedSearch.cancel()
  }, [searchValue, debouncedSearch])

  const handleSearch = () => {
    debouncedSearch()
    setSearchPerformed(true)
  }

  return (
    <div>
      <SearchInput
        searchValue={searchValue}
        handleSearchInputValues={handleSearchInputValues}
        callSearchFunction={handleSearch}
      />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="movie-list">
          {searchPerfomed && movies && movies.length > 0 ? (
            movies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))
          ) : searchPerfomed && (!movies || movies.length === 0) ? (
            <div>No movies found</div>
          ) : null}
        </div>
      )}
    </div>
  )
}

export default SearchLogic
