import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { InstagramIcon, Avatar, Row, Title } from "./styles"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata
  return (
    <>
      <Title>ABOUT THE AUTHOR</Title>
      <Row>
        <Avatar fixed={data.avatar.childImageSharp.fixed} alt={author} />
        <div>
          <h3>
            Emily Marsh <InstagramIcon />
          </h3>
          <p>
            Emily is an Inbound Marketer for Iconosquare, based in the Limoges
            office. She loves all things social and revels in keeping on top of
            the social media marketing game by writing for the blog. She’s also
            a bit obsessed with sushi and Netflix.
          </p>
        </div>
      </Row>
    </>
  )
}

export default Bio
