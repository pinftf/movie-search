import React from 'react'
import PropTypes from 'prop-types'
import { Button, Input } from '../UI'

const SearchInput = ({
  searchValue,
  handleSearchInputValues,
  callSearchFunction
}) => {
  return (
    <div>
      <Input
        value={searchValue}
        onChange={handleSearchInputValues}
        type="text"
      />
      <Button onClick={callSearchFunction}>Search</Button>
    </div>
  )
}

SearchInput.propTypes = {
  searchValue: PropTypes.string.isRequired,
  handleSearchInputValues: PropTypes.func.isRequired,
  callSearchFunction: PropTypes.func.isRequired
}

export default SearchInput
