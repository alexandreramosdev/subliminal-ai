import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useMediaQuery } from "react-responsive"

import Button from "../button"
import HamburguerButton from "./hamburguerButton"
import { Wrapper, Logo, Nav, List, Item, Link, Container } from "./styles"

const Topbar = ({ location }) => {
  const data = useStaticQuery(graphql`
    query Topbar {
      logo: file(absolutePath: { regex: "/logo-subliminal.png/" }) {
        childImageSharp {
          fixed(width: 197) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  console.log('TOPBAR >', location.pathname)
  const imageSource = data.logo.childImageSharp.fixed

  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => setIsOpen(!isOpen)
  const isMobile = useMediaQuery({ query: "(max-width: 900px)" })
  const isContactPage = location.pathname === '/contact'

  const routes = [
    { to: "/#features", title: "Features" },
    { to: "/#resource", title: "Resource" },
    { to: "/subliminal-ai", title: "Blog" },
    { to: "/#learn-more", title: "Learn More" },
  ]

  return (
    <Container isContactPage={isContactPage}>
      <Wrapper isContactPage={isContactPage}>
        <Link to="/">
          <Logo fixed={imageSource} />
        </Link>

        {isMobile && <HamburguerButton setIsOpen={setIsOpen} isOpen={isOpen} />}

        <Nav isOpen={isOpen} isContactPage={isContactPage}>
          <List>
            {routes.map(({ to, title }) => (
              <Item key={to}>
                <Link to={to} onClick={isMobile ? handleClick : null}>
                  {title}
                </Link>
              </Item>
            ))}

            <Item>
              <Button onClick={isMobile ? handleClick : null} bgShadow={isContactPage ? "#fff6ef " : "#fff"} >
                Schedule A Call
            </Button>
            </Item>
          </List>
        </Nav>
      </Wrapper>
    </Container>
  )
}

export default Topbar
