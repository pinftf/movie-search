import React from 'react'
import { useParams } from 'react-router-dom'
import useMovieDetails from '../../components/useMovieDetails'
import Header from '../../components/Header/Header'
import MovieDetail from '../../UI/MovieDetail/MovieDetail'
import '../MovieDetails/MovieDetails.css'

const MovieDetailPage = () => {
  const { id } = useParams()
  console.log('Movie ID:', id)

  if (!id) {
    console.error('Movie ID is undefined')
    return <div>No movie ID provided</div>
  }
  const movie = useMovieDetails(id)
  return (
    <div className="movie-detail-page">
      <Header />
      <MovieDetail movie={movie} />
    </div>
  )
}

export default MovieDetailPage
