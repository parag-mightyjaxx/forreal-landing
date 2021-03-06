/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import "../styles/index.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          padding: `0px`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          <div className="container">
            <Link to="/privacy-policy">Privacy Policy</Link>
            {/* © {new Date().getFullYear()}, Mighty Jaxx International Pte Ltd <br />
            21 Tai Seng Drive #06-00 Singapore 535223 <br />
            All rights reserved <br /> */}
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
