import React from "react"

import GlobalStyles from '../styles/globalStyles'

const Layout = ({ location, title, children }) => (
  <>
    <header>{title}</header>
    <main>{children}</main>
    <footer></footer>
    <GlobalStyles />
  </>
)

export default Layout
