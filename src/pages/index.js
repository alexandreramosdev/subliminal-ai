import React from "react"
import { useStaticQuery, graphql } from "gatsby"

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

const Index = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      heroHome: file(absolutePath: { regex: "/subliminal-hero.png/" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout location={location}>
      
      <SEO title="Home" />
      <Hero
        title="Transform your business with Artificial Intelligence"
        subTitle=" Subliminal AI is a Machine Learning Consulting firm experienced in applying AI and Machine Learning to business problems."
        sourceImage={data.heroHome.childImageSharp.fluid}
      />
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
      <CallTo
        title="Got A Project Idea? let’s Have A Quick, 15-minute Call To"
        subtitle="Find out how Data Science Consulting can help your business. Estimate the time and budget needed to develop a solution. Learn more about our expertise and capabilities."
        linkTitle="Learn About The Process"
      />
    </Layout>
  )
}

export default Index

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//       edges {
//         node {
//           excerpt
//           fields {
//             slug
//           }
//           frontmatter {
//             date(formatString: "MMMM DD, YYYY")
//             title
//             description
//           }
//         }
//       }
//     }
//   }
// `
