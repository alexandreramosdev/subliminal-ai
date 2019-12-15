import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useMediaQuery } from 'react-responsive'

import Button from '../button'
import HamburguerButton from './hamburguerButton'
import { Wrapper, Logo, Nav, List, Item, Link } from './styles'

const Topbar = () => {
  const data = useStaticQuery(graphql`
    query Topbar{
        logo: file(absolutePath: { regex: "/logo-subliminal.png/" }) {
          childImageSharp {
            fixed(width: 197) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
   `)
  const imageSource = data.logo.childImageSharp.fixed

  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => setIsOpen(!isOpen)
  const isMobile = useMediaQuery({ query: '(max-width: 900px)' })

  const routes = [
    { to: "/#features", title: "Features" },
    { to: "/#resource", title: "Resource" },
    { to: "/subliminal-ai", title: "Blog" },
    { to: "/#learn-more", title: "Learn More" },
  ];

  return (
    <Wrapper>
      <Link to="/">
        <Logo fixed={imageSource} />
      </Link>

      {isMobile && (
        <HamburguerButton setIsOpen={setIsOpen} isOpen={isOpen} />
      )}

      <Nav isOpen={isOpen}>
        <List>
          {routes.map(({ to, title }) => (
            <Item key={to}>
              <Link to={to} onClick={isMobile ? handleClick : null}>{title}</Link>
            </Item>

          ))}

          <Item>
            <Button onClick={isMobile ? handleClick : null}>Schedule A Call</Button>
          </Item>
        </List>
      </Nav>
    </Wrapper>
  )
}

export default Topbar