import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="nav-header">
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1280,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      {/* <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1> */}
      <div className="nav-menu">
        <p>REGISTER</p>
        <p>TECH</p>
        <p>PARTNERS</p>
        <p>CONTACT</p>
      </div>
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
