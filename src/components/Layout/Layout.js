import Header from '../Header/Header'
import PropTypes from 'prop-types'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout

Layout.propTypes = {
  children: PropTypes.node
}
