import React from 'react'
import PropTypes from 'prop-types'
import { Button, Input } from '../../UI'
import './SearchInput.css'

const SearchInput = ({
  searchValue,
  handleSearchInputValues,
  callSearchFunction
}) => {
  return (
    <div className="search-input-container">
      <Input
        className="input-field"
        value={searchValue}
        onChange={handleSearchInputValues}
        type="text"
      />
    </div>
  )
}

SearchInput.propTypes = {
  searchValue: PropTypes.string.isRequired,
  handleSearchInputValues: PropTypes.func.isRequired,
  callSearchFunction: PropTypes.func.isRequired
}

export default SearchInput
