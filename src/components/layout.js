import React from "react"
import { Link } from "gatsby"

import GlobalStyles from '../styles/globalStyles'

const Layout = ({ location, title, children }) => {

  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1>
        <Link to={`/`}>
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3 >
        <Link to={`/`}>
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <>
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
          {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
      <GlobalStyles />
    </>
  )
}

export default Layout
