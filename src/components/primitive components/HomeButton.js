import React from 'react'
import PropTypes from 'prop-types'

const HomeButton = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>
}

HomeButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default HomeButton
