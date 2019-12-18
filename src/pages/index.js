import React from "react"
import { graphql } from "gatsby"

import {
  Layout,
  SEO,
  Hero,
  Trusted,
  OpenSource,
  Solution,
  Testimonial,
  CallTo,
  News,
} from "../components"

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  // const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      <Hero />
      <Trusted />
      <OpenSource />
      <Solution />
      <Testimonial />
      <News
        title="News & Announcements"
        subtitle="See updates to help you with your work, and subscribe to our monthly
          Subliminal AI newsletter to get the latest announcements sent directly
          to your inbox."
      />
      <CallTo />
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
