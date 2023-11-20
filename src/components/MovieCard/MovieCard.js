import React, { useState } from 'react'
import './MovieCard.css'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../UI/Button/Button'
import { Heart } from '../../UI'

const CUSTOM_PLACEHOLDER_IMAGE =
  'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'

const MovieCard = ({ movie }) => {
  const [isFavorite, setisFavorite] = useState(false)
  if (!movie || typeof movie.Poster === 'undefined') {
    return null
  }
  const navigate = useNavigate()
  const handleCardCLick = () => {
    if (movie && movie.imdbID) {
      navigate(`/movie/${movie.imdbID}`)
    } else {
      console.error('Missing or undefined movie ID')
    }
  }
  const handleFavoriteClick = (e) => {
    e.stopPropagation()
    setisFavorite(!isFavorite)
  }
  const poster =
    movie.Poster === 'N/A' ? CUSTOM_PLACEHOLDER_IMAGE : movie.Poster
  return (
    <div className="movie" onClick={handleCardCLick}>
      <h2>{movie.Title}</h2>
      <div>
        <img
          width="200"
          alt={`The movie titled: ${movie.Title}`}
          src={poster}
        />
      </div>
      <p>
        ({movie.Year}){' '}
        <Button
          className={`favorite-button ${isFavorite ? 'active' : ''}`}
          onClick={handleFavoriteClick}
          icon={<Heart />}
        />
      </p>
    </div>
  )
}

export default MovieCard
