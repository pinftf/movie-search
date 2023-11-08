import React from 'react'
import { action } from '@storybook/addon-actions'

import SearchInput from './SearchInput'

const SearchInputStories = {
  title: 'SearchInput',
  component: SearchInput
}

export default SearchInputStories

export const Default = () => (
  <SearchInput
    searchValue=""
    handleSearchInputValues={action('Input changed')}
    callSearchFunction={action('Search button clicked')}
  />
)
