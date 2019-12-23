import React from 'react';

import { Layout, SEO, Trusted, Hero, CallTo } from '../../components'

// import { Container } from './styles';

const Contact = ({ location }) => (
  <Layout isContactPage location={location}>
    <SEO title="Contact" />
    <Hero
      contact
      title="Let’s Talk About AI, Schedule a call with an AI Expert"
      subTitle="Have a project in mind? Or just curious about AI? Let’s connect to discuss your needs and determine if AI is a fit for your use case."
    />

    <CallTo
      isContactPage
      title="Schedule A 15-min Call With An Ai Expert"
      subtitle="Have a project in mind? Or just curious about AI? Let’s connect to discuss your needs and determine if AI is a fit for your use case."
      linkTitle="Chat with us"
    />
    <Trusted light />
  </Layout>
)

export default Contact;


