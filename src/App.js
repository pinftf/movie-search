import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MovieDetailPage from './pages/MovieDetails/MovieDetailPage'
import './App.css'
import Mainpage from './pages/MainPage/Mainpage'
import Layout from './components/Layout/Layout'

function App() {
  return (
    <Router>
      <div className="app">
        <Layout>
          <Routes>
            <Route path="/" element={<Mainpage />} />
            <Route path="/movie/:id" element={<MovieDetailPage />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  )
}

export default App
