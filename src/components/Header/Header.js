import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Header.css'

const Header = (props) => {
  const navigate = useNavigate()

  const handleHeaderClick = () => {
    navigate('/')
  }

  return (
    <div className="header" onClick={handleHeaderClick} aria-label="Homepage">
      <h1>Morsch</h1>
      <p>Discover and explore your favorite movies</p>
    </div>
  )
}

export default Header
