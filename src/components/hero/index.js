import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import arrow from "../../assets/images/arrow.svg"

import Button from "../button"
import {
  Header,
  WrapperHeadline,
  Headline,
  Title,
  SubTitle,
  WrapperAction,
  Image,
  Link,
} from "./styles"

const Hero = ({ contact = false, title, subTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      image: file(absolutePath: { regex: "/subliminal-hero.png/" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      heroContact: file(absolutePath: { regex: "/hero-contact.png/" }) {
        childImageSharp {
          fluid(maxWidth: 455, maxHeight: 552) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  // const imageHero = 

  return (
    <Header contact={contact}>
      <WrapperHeadline contact={contact}>
        <Headline contact={contact}>
          <Title contact={contact}>{title} </Title>
          <SubTitle>{subTitle}</SubTitle>
        </Headline>
        <Image contact={contact} fluid={contact ? data.heroContact.childImageSharp.fluid : data.image.childImageSharp.fluid} />
      </WrapperHeadline>
      <WrapperAction contact={contact}>
        <Button responsive bgShadow={contact ? "#fff6ef " : "#fff"}>Schedule A Call</Button>
        <Link href="#">
          Subliminal AI Extended <img src={arrow} alt="arrow" />
        </Link>
      </WrapperAction>
    </Header >
  )
}

export default Hero
