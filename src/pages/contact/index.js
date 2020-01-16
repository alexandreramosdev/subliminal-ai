import React from 'react';
import { useStaticQuery, graphql } from "gatsby";

import { Layout, SEO, Trusted, Hero, CallTo } from '../../components'
import WorkTogether from '../../components/workTogether'
import DontLikeForm from '../../components/dontLikeForm'
import LetsTalk from '../../components/letsTalk'

// import { Container } from './styles';

const Contact = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      heroContact: file(absolutePath: { regex: "/hero-contact.png/" }) {
        childImageSharp {
          fluid(maxWidth: 455, maxHeight: 552) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout bgColorTopbar='#fff6ef' >
      <SEO title="Contact" />
      <Hero
        title="Let’s Talk About AI, Schedule a call with an AI Expert"
        subTitle="Have a project in mind? Or just curious about AI? Let’s connect to discuss your needs and determine if AI is a fit for your use case."
        sourceImage={data.heroContact.childImageSharp.fluid}
        bgColor='#fff6ef'
        textAlignLeft
        smallImageNone
        actionLink='https://calendly.com/kabirkhan/30min'
        titleButton='Schedule A Call'
      />
      <LetsTalk />

      <CallTo
        isContactPage
        title="Schedule A 15-min Call With An Ai Expert"
        subtitle="Have a project in mind? Or just curious about AI? Let’s connect to discuss your needs and determine if AI is a fit for your use case."
        linkTitle="Chat with us"
      />

      <WorkTogether />
      <DontLikeForm />
      <Trusted light />
    </Layout>
  )
}

export default Contact;


