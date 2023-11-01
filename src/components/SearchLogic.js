import React, { useState } from 'react'
import SearchUI from './primitive components/SearchUI'
import PropTypes from 'prop-types'

const SearchLogic = ({ search }) => {
  const [searchValue, setSearchValue] = useState('')

  const handleSearchInputValues = (e) => {
    setSearchValue(e.target.value)
  }

  const resetInputField = () => {
    setSearchValue('')
  }

  const callSearchFunction = (e) => {
    e.preventDefault()
    search(searchValue)
    resetInputField()
  }

  return (
    <SearchUI
      searchValue={searchValue}
      handleSearchInputValues={handleSearchInputValues}
      callSearchFunction={callSearchFunction}
    />
  )
}

SearchLogic.propTypes = {
  search: PropTypes.string.isRequired
}
export default SearchLogic
