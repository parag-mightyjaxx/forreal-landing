import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="nav-header">
    <div className="nav-menu">
      <Link to="/"><h2>Forreal.</h2></Link>
      <Link to="/"><h2>Technology</h2></Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
