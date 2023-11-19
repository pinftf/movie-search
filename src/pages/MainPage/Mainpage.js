import React from 'react'
import Header from '../../components/Header/Header'
import SearchLogic from '../../components/Search/SearchLogic'
import './Mainpage.css'
import { useDefaultMovies } from '../../components/useDefaultMovies'
import MovieCard from '../../components/MovieCard/MovieCard'

const Mainpage = () => {
  const defaultMovies = useDefaultMovies()
  return (
    <div className="main-page">
      <SearchLogic />
      <div className="movie-list">
        {defaultMovies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default Mainpage
