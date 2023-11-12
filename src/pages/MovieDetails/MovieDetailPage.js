import React from 'react'
import { useParams } from 'react-router-dom'
import useMovieDetails from '../../components/useMovieDetails'
import Header from '../../components/Header/Header'
import MovieDetail from '../../UI/MovieDetail/MovieDetail'

const MovieDetailPage = () => {
  const { id } = useParams()
  const movie = useMovieDetails(id)
  return (
    <div>
      <Header />
      <MovieDetail movie={movie} />
    </div>
  )
}

export default MovieDetailPage
