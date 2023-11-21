import React from 'react'
import PropTypes from 'prop-types'
import { Input } from '../../UI'
import './SearchInput.css'

const SearchInput = ({ searchValue, onSearchValueChange }) => {
  return (
    <div className="search-input-container">
      <Input
        className="input-field"
        value={searchValue}
        placeholder="Search for a movie"
        onChange={onSearchValueChange}
        type="text"
      />
    </div>
  )
}

SearchInput.propTypes = {
  searchValue: PropTypes.string.isRequired,
  onSearchValueChange: PropTypes.func.isRequired
}

export default SearchInput
