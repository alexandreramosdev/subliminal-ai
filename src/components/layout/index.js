import React from "react"

import Topbar from "../topbar"
import Footer from "../footer"

import GlobalStyles from "../../styles/globalStyles"

const Layout = ({ isContactPage, location, children, bgColorTopbar }) => {
  console.log(bgColorTopbar)
  return (
    <>
      <Topbar bgColorTopbar={bgColorTopbar} isContactPage={isContactPage} location={location} />
      <main>{children}</main>
      <Footer />
      <GlobalStyles />
    </>
  )
}

export default Layout
