import MovieCard from '../../components/Cards/MovieCard'

import { useFavStore } from '../../App'

const Favorites = () => {
  const favorites = useFavStore((state) => state.favorites)

  return (
    <div className="page">
      {favorites.length === 0 && (
        <div className="no-results">No favorites added yet</div>
      )}
      {favorites.length !== 0 && (
        <div className="movie-list">
          {favorites.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Favorites
