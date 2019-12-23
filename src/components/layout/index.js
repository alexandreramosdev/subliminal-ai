import React from "react"

import Topbar from "../topbar"
import Footer from "../footer"

import GlobalStyles from "../../styles/globalStyles"

const Layout = ({ isContactPage, location, title, children }) => {
  return (
    <>
      <Topbar isContactPage={isContactPage} location={location} />
      <main>{children}</main>
      <Footer />
      <GlobalStyles />
    </>
  )
}

export default Layout
