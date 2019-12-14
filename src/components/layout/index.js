import React from "react"

import Topbar from '../topbar'

import GlobalStyles from "../../styles/globalStyles"

const Layout = ({ location, title, children }) => (
  <>
    <Topbar />
    <main>{children}</main>
    <footer></footer>
    <GlobalStyles />
  </>
)

export default Layout
