import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MovieDetailPage from './pages/MovieDetails/MovieDetailPage'
import './App.css'
import Mainpage from './pages/MainPage/Mainpage'

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/movie/:id" element={<MovieDetailPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
