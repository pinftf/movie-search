import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { Heart } from '../../UI'

const Header = (props) => {
  return (
    <div className="header">
      <Link className="link" to="/">
        <h1>Morsch</h1>
      </Link>
      <p>Discover and explore your favorite movies</p>
      <Link to="/favorites" className="link">
        My favorites
        <Heart
          style={{
            marginLeft: 8
          }}
        />
      </Link>
    </div>
  )
}

export default Header
