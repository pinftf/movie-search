import React from 'react'
import Header from '../../components/Header/Header'
import SearchLogic from '../../components/Search/SearchLogic'
import './Mainpage.css'
import MovieCard from '../../components/MovieCard/MovieCard'

const Mainpage = () => {
  return (
    <div className="main-page">
      <Header />
      <SearchLogic />
      <MovieCard />
    </div>
  )
}

export default Mainpage
