import React from "react"
import { Link, graphql } from "gatsby"
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'

import Bio from "../../components/bio"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

import { Hero, Title, Category, ContentPost, Footer, Line } from './styles'

const BlogPostTemplate = ({ data, location, pageContext }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const siteUrl = data.site.siteMetadata.siteUrl
  const heroSource = post.frontmatter.hero.childImageSharp.fluid.src
  const { previous, next } = pageContext

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
          <Title>
            {post.frontmatter.title}
          </Title>
        </Hero>
        <ContentPost dangerouslySetInnerHTML={{ __html: post.html }} />
        <Footer>
          <Line />
          <Bio />
          <Line />
          <Disqus config={disqusConfig} />
        </Footer>
      </article>

      <nav>
        <ul>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
                </Link>
            )}
          </li>
        </ul>
      </nav>
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
