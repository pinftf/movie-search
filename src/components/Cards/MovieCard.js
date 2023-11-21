import PropTypes from 'prop-types'
import './MovieCard.css'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../UI/Button/Button'
import { Heart } from '../../UI'
import { useFavStore } from '../../App'

const CUSTOM_PLACEHOLDER_IMAGE =
  'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'

const MovieCard = ({ movie }) => {
  const navigate = useNavigate()

  const favorites = useFavStore((state) => state.favorites)
  const isFavorite = favorites.some((fav) => fav.imdbID === movie.imdbID)

  const addToFavorites = useFavStore((state) => state.addToFavorites)
  const removeFromFavorites = useFavStore((state) => state.removeFromFavorites)

  const handleCardCLick = () => {
    navigate(`/movie/${movie.imdbID}`)
  }
  const handleFavoriteClick = (e) => {
    e.stopPropagation()

    if (isFavorite) {
      return removeFromFavorites(movie)
    }

    return addToFavorites(movie)
  }

  const poster =
    movie.Poster === 'N/A' ? CUSTOM_PLACEHOLDER_IMAGE : movie.Poster

  if (!movie || typeof movie.Poster === 'undefined') {
    return null
  }

  return (
    <div className="movie" onClick={handleCardCLick}>
      <div
        className="movie-img"
        style={{
          backgroundImage: `url(${poster})`
        }}
      />
      <div className="movie-content">
        <div className="movie-info">
          <h2>{movie.Title}</h2>
          <p>{movie.Year}</p>
        </div>
        <Button
          variant="transparent"
          onClick={handleFavoriteClick}
          icon={
            <Heart
              color={isFavorite ? 'red' : 'grey'}
              style={{
                marginRight: 0
              }}
            />
          }
          style={{ padding: 0 }}
        />
      </div>
    </div>
  )
}

export default MovieCard

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
    imdbID: PropTypes.string.isRequired,
    Poster: PropTypes.string.isRequired
  })
}
