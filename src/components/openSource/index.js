import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import {
  Section,
  WrapperHeader,
  Title,
  Subtitle,
  Play,
  WrapperCard,
  Card,
  ImageCard,
  TitleCard,
  DescriptionCard,
  ActionCard,
  PlayIcon
} from './styles';

import arrow from '../../assets/images/right-arrow-white.png'

const OpenSource = () => {
  const data = useStaticQuery(graphql`
    query {
      card_1: file(absolutePath: { regex: "/open-source-1.png/" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      card_2: file(absolutePath: { regex: "/open-source-2.png/" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      card_3: file(absolutePath: { regex: "/open-source-3.png/" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      card_4: file(absolutePath: { regex: "/open-source-4.png/" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
`)
  return (
    <Section>
      <WrapperHeader>
        <Title>An End-to-end Open Source Machine Learning Platform</Title>
        <Subtitle>
          Subliminal Ai Extended Is An End-to-end Platform For Preparing Data, Training,Validating, And Deploying Models In Large Production Environments.
      </Subtitle>
        <Play href="#"><PlayIcon />  WATCH THE FILM</Play>
      </WrapperHeader>
      <WrapperCard>
        <Card bgColor='#3486fe' >
          <ImageCard fluid={data.card_1.childImageSharp.fluid} />
          <TitleCard>Nlp (text Analysis)</TitleCard>
          <DescriptionCard>
            Subliminal AI specializes in creating structured knowledge from unstructured text.
          </DescriptionCard>
          <ActionCard href="#">See Cases <img src={arrow} alt='arrow right' /></ActionCard>
        </Card>
        <Card bgColor='#4937be' translate >
          <ImageCard fluid={data.card_2.childImageSharp.fluid} />
          <TitleCard>Computer Vision</TitleCard>
          <DescriptionCard>
            Does your company have a lot of images or videos? Turn that raw media into structured
          </DescriptionCard>
          <ActionCard href="#">See Cases <img src={arrow} alt='arrow right' /></ActionCard>
        </Card>
        <Card bgColor='#3f7be6' >
          <ImageCard fluid={data.card_3.childImageSharp.fluid} />
          <TitleCard>Data Analysis & Predictive Analytics</TitleCard>
          <DescriptionCard>
            Whatever form your data is in, we can work with you to clean, augment, and analyze it to
          </DescriptionCard>
          <ActionCard href="#">See Cases <img src={arrow} alt='arrow right' /></ActionCard>
        </Card>
        <Card bgColor='#01185d' translate>
          <ImageCard fluid={data.card_4.childImageSharp.fluid} />
          <TitleCard>End-to-end Software Development</TitleCard>
          <DescriptionCard>
            A Machine Learning model is only useful if you can actually integrate it into your product.
          </DescriptionCard>
          <ActionCard href="#">See Cases <img src={arrow} alt='arrow right' /></ActionCard>
        </Card>
      </WrapperCard>

    </Section>
  )
};

export default OpenSource;