import React from "react"

import Topbar from '../topbar'
<Topbar />
import GlobalStyles from "../../styles/globalStyles"

const Layout = ({ location, title, children }) => (
  <>
    <main>{children}</main>
    <footer></footer>
    <GlobalStyles />
  </>
)

export default Layout
