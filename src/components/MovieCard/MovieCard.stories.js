// MovieCard.stories.js
import React from 'react'
import MovieCard from './MovieCard'

export default {
  title: 'MovieCard',
  component: MovieCard
}

const Template = (args) => <MovieCard {...args} />

export const Default = Template.bind({})
Default.args = {
  movie: {
    Title: 'Sample Movie',
    Poster:
      'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg',
    Year: '2022'
  }
}
