import React from 'react'

import MovieCard from '../../components/Cards/MovieCard'
import { useOMDBApi } from '../../hooks/useOMDBApi'
import SearchInput from '../../components/Search/SearchInput'
import SkeletonCard from '../../components/Cards/SkeletonCard'

const MainPage = () => {
  const { searchValue, handleSearchInputValues, movies, loading } = useOMDBApi()

  const RenderMovies = () => {
    if (loading) {
      return (
        <div className="movie-list">
          {new Array(10).fill(0).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      )
    }

    if (movies && movies.length > 0 && !loading) {
      return (
        <div className="movie-list">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )
    }

    return (
      <div className="no-results">
        No movies found. Please try a different search.
      </div>
    )
  }

  return (
    <div className="page">
      <SearchInput
        searchValue={searchValue}
        onSearchValueChange={handleSearchInputValues}
      />
      <RenderMovies />
    </div>
  )
}

export default MainPage
