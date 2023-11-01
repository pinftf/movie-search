import React, { useState } from 'react'

const FavoriteButton = () => {
  const [isFavorite, setisFavorite] = useState(false)

  const toggleFavorite = () => {
    setisFavorite(!isFavorite)
  }
  return (
    <button onClick={toggleFavorite}>
      {isFavorite ? 'Unfavorite' : 'Favorite'}
    </button>
  )
}

export default FavoriteButton
