import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom'
import MovieDetailPage from './pages/MovieDetailPage/MovieDetailPage'
import './App.css'
import MainPage from './pages/MainPage/MainPage'
import Layout from './components/Layout/Layout'

import { create } from 'zustand'
import Favorites from './pages/Favorites/Favorites'

// Favorites store
export const useFavStore = create((set) => ({
  favorites: [],
  addToFavorites: (movie) =>
    set((state) => ({ favorites: [...state.favorites, movie] })),
  removeFromFavorites: (movie) =>
    set((state) => ({
      favorites: state.favorites.filter((fav) => fav.imdbID !== movie.imdbID)
    }))
}))

function App() {
  return (
    <Router>
      <div className="app">
        <Layout>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/movie/:id" element={<MovieDetailPage />} />
            <Route path="/favorites" element={<Favorites />} />
            {/* Redirect to homepage if no movie id is passed or there's no route match */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  )
}

export default App
