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

// GLOBAL State - Zustand package To add, remove and check favorite movies

// const favorites = ['12', '23', '45']

// const useFavoritesState = create((set) => ({
//   favorites: [],
//   addToFavorites: (id) => set((state) => ({ favorites: [...favorites, id] })),
//   removeFromFavorites: (id) =>
//     set({ favorites: favorites.filter((favorite) => favorite !== id) })
// }))

// const onAddToFavorites =  useFavoritesState((state) => state.addToFavorites)
// const favorites = useFavoritesState(state => state.favorites)

// const isFavorite = favorites.some(id => id === movie.id)

/* <button onClick={() => onAddToFavorites(id)}>
{isFavorite ? 'Unfavorite' : 'Favorite'}
</button> */
