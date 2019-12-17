import React from "react"

import Topbar from "../topbar"
import Footer from "../footer"

import GlobalStyles from "../../styles/globalStyles"

const Layout = ({ location, title, children }) => (
  <>
    <Topbar />
    <main>{children}</main>
    <Footer />
    <GlobalStyles />
  </>
)

export default Layout
