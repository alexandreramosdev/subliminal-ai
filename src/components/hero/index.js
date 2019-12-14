import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useMediaQuery } from 'react-responsive'

import arrow from '../../assets/images/arrow.svg'

import Button, { ButtonSmall } from '../button'
import { Header, WrapperHeadline, Headline, Title, SubTitle, WrapperAction, Image, Link } from './styles';

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(absolutePath: { regex: "/subliminal-hero.png/" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
`)

  const isMobile = useMediaQuery({ query: '(min-width: 600px)' })

  return (
    <Header>
      <WrapperHeadline>
        <Headline>
          <Title >Transform your <br /> business  with Artificial Intelligence</Title>
          <SubTitle>Subliminal AI is a Machine Learning Consulting firm experienced in applying AI and Machine Learning to business problems.</SubTitle>
        </Headline>
        <Image fluid={data.image.childImageSharp.fluid} />
      </WrapperHeadline>
      <WrapperAction>
        <Button small={!isMobile}>Schedule A Call</Button>
        <Link href="#">Subliminal AI Extended  <img src={arrow} alt="arrow" /></Link>
      </WrapperAction>
    </Header>
  )
};

export default Hero;
