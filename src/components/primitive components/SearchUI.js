import React from 'react'
import PropTypes from 'prop-types'

const SearchUI = ({
  searchValue,
  handleSearchInputValues,
  callSearchFunction
}) => {
  return (
    <form className="search">
      <input
        value={searchValue}
        onChange={handleSearchInputValues}
        type="text"
      />
      <input onClick={callSearchFunction} type="submit" value="SEARCH" />
    </form>
  )
}

SearchUI.propTypes = {
  searchValue: PropTypes.string.isRequired,
  handleSearchInputValues: PropTypes.string.isRequired,
  callSearchFunction: PropTypes.string.isRequired
}

export default SearchUI
