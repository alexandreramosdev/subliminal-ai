import React from "react"
import { Link, graphql } from "gatsby"
import { Disqus, CommentCount } from "gatsby-plugin-disqus"

import { Bio, Share } from "../../components"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

import { Hero, Title, Category, ContentPost, Footer, Line } from "./styles"

const BlogPostTemplate = ({ data, location, pageContext }) => {
  const post = data.markdownRemark
  const siteUrl = data.site.siteMetadata.siteUrl
  const siteTitle = data.site.siteMetadata.title
  const userTwitter = data.site.siteMetadata.social.twitter
  const heroSource = post.frontmatter.hero.childImageSharp.fluid.src
  // const { previous, next } = pageContext

  const disqusConfig = {
    url: `${siteUrl + location.pathname}`,
    identifier: post.id,
    title: post.title,
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article>
        <Hero bgHero={heroSource}>
          <Category>Marketing</Category>
          <Title>{post.frontmatter.title}</Title>
        </Hero>
        <ContentPost dangerouslySetInnerHTML={{ __html: post.html }} />
        <Footer>
          <Share
            socialConfig={{
              twitterHandle: `${userTwitter}`,
              config: {
                url: `${siteUrl + location.pathname}`,
                title: `${post.title}`,
              },
            }}
          />
          <Line />
          <Bio />
          <Line />
          <Disqus config={disqusConfig} />
        </Footer>
      </article>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        siteUrl
        social {
          twitter
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        hero {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`
