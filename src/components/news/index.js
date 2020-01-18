import React, { useRef } from "react"
import TinySlider from "tiny-slider-react"
import { useStaticQuery } from "gatsby"

import avatar from "../../assets/images/avatar.png"
import arrowLong from "../../assets/images/arrow-long.svg"
import arrow from "../../assets/images/right-arrow-blue.png"
import {
  Section,
  Wrapper,
  Title,
  Subtitle,
  WrapperCarousel,
  // Card,
  HeaderCard,
  TitleCard,
  Media,
  Avatar,
  Name,
  DescriptionCard,
  Content,
  LinkTo,
  Info,
  Time,
  Tag,
  Controls,
} from "./styles"

import Card from "../card"

const News = ({ title, subtitle }) => {
  const controlsRef = useRef(null)
  const onGoTo = dir => controlsRef.current.slider.goTo(dir)

  const data = useStaticQuery(graphql`
    query {
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
              category
              author
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
      }
    }
  `)

  const settings = {
    items: 1,
    controls: false,
    nav: false,
    wrapAround: false,
    responsive: {
      600: {
        items: 2,
      },
    },
  }

  return (
    <Section>
      <Wrapper>
        <Title>{title}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        <LinkTo to="/blog">
          Explore Blog <img src={arrow} alt="..." />
        </LinkTo>
      </Wrapper>
      <WrapperCarousel>
        <TinySlider settings={settings} ref={controlsRef}>
          {data &&
            data.allMarkdownRemark.edges.map(({ node }) => (
              <Card
                post={node.frontmatter}
                slug={node.fields.slug}
                key={String(
                  node.frontmatter.date +
                    Math.random()
                      .toString(36)
                      .substring(7)
                )}
              />
            ))}
        </TinySlider>
        <Controls>
          <button type="button" onClick={() => onGoTo("prev")}>
            <img src={arrowLong} />
          </button>
          <button type="button" onClick={() => onGoTo("next")}>
            <img src={arrowLong} />
          </button>
        </Controls>
      </WrapperCarousel>
    </Section>
  )
}

export default News
